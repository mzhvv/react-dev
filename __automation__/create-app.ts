//__automation__/create-app.ts

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

import type { StringCases } from '../src/core/shared/utils/string'
import { stringCases } from '../src/core/shared/utils/string'
import { spaces, spacesBullet } from '../src/core/shared/utils/decoration/string'

const appName = process.argv[2]
if (!appName) {
  console.error('Usage: npm run apps:create <app-name>')
  process.exit(1)
} else {
  createApp(appName)
}

// flow

function createApp(appName: string): void {
  console.log(`🔄 create-app ${appName}\n`)

  const appNamesCases = stringCases(appName)

  // 1. Копируем шаблон
  copyTemplate(appName)

  // 2. Переименовываем файлы
  renameTemplateFiles(`src/apps/${appName}`, appName)

  // 3. Заменяем все варианты
  replaceInFiles(`src/apps/${appName}`, {
    '__template-app__': appNamesCases.default,
    '@apps/__template-app__': `@apps/${appNamesCases.default}`,
    'template-app': appNamesCases.default,
    TemplateApp: appNamesCases.pascal,
    templateApp: appNamesCases.camel,
    TEMPLATE_APP: appNamesCases.const,
  })

  // 4. ИНТЕГРАЦИЯ
  integrateAccumulators(appNamesCases)

  console.log(`\n✅ Приложение src/apps/${appName} готово!\n`)
}

// #region template

function copyTemplate(appName: string): void {
  execSync(`cp -r src/apps/__template-app__ src/apps/${appName}`)

  console.log(`   Шаблон скопирован из src/apps/__template-app__`)
}

function replaceInFiles(dir: string, replacements: Record<string, string>): void {
  const files = fs.readdirSync(dir, { recursive: true }) as string[]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let totalReplacements = 0

  files.forEach(file => {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isFile()) {
      // console.log(`   ${filePath}`)
      let content = fs.readFileSync(filePath, 'utf8')
      let fileReplacements = 0

      Object.entries(replacements).forEach(([search, replace]) => {
        const matches = content.match(new RegExp(search, 'g'))
        if (matches) {
          // console.log(`      "${search}" → "${replace}" (${matches.length})`)
          fileReplacements += matches.length
          content = content.replace(new RegExp(search, 'g'), replace)
        }
      })

      if (fileReplacements > 0) {
        fs.writeFileSync(filePath, content)
        totalReplacements += fileReplacements
      }
    }
  })

  console.log(`   Шаблонные значения в файлах переименованы`) // (${totalReplacements} замен)
}

function renameTemplateFiles(appDir: string, appName: string): void {
  const templateAppFile = path.join(appDir, 'pages', 'template-app.tsx')
  const newAppFile = path.join(appDir, 'pages', `${appName}.tsx`)

  if (fs.existsSync(templateAppFile)) {
    fs.renameSync(templateAppFile, newAppFile)
    // console.log(`   "template-app.tsx" → "${appName}.tsx"`)
  }

  console.log(`   Шаблонные файлы переименованы`)
}

// #endregion

// #region integrateAccumulators

function integrateAccumulators(appNamesCases: StringCases): void {
  console.log('\n' + spaces(3) + 'Интеграция:')

  updateTypes({
    typesPath: 'src/apps/__accumulators__/types.ts',
    importTypes: `import type { ${appNamesCases.pascal}DomainRelativePath } from '@apps/${appNamesCases.default}'`,
    exportType: 'export type AppsDomainRoutePath',
    typeName: `${appNamesCases.pascal}DomainRelativePath`,
  })

  console.log(spaces(3) + `Интеграция успешна!`)
}

interface UpdateTypes {
  typesPath: string
  importTypes: string
  exportType: string
  typeName: string
}
function updateTypes({ typesPath, importTypes, exportType, typeName }: UpdateTypes): void {
  let currentFile = fs.readFileSync(typesPath, 'utf8')

  console.log(spaces(3) + `- ${typesPath}`)

  // Добавляем импорт
  const importEnd = currentFile.lastIndexOf('import type')
  if (importEnd !== -1) {
    const nextLine = currentFile.indexOf('\n', importEnd) + 1
    currentFile =
      currentFile.substring(0, nextLine) + importTypes + '\n' + currentFile.substring(nextLine)
  }

  console.log(spacesBullet(6) + `import: ${importTypes}`)

  // Для однострочного union типа
  if (currentFile.includes(exportType) && !currentFile.includes('\n  |')) {
    // Находим строку с union типом (до конца строки)
    const unionLineMatch = currentFile.match(new RegExp(`(${exportType} =[^\\n]+)`))
    if (unionLineMatch) {
      const oldUnion = unionLineMatch[1]
      // Добавляем новый тип в конец union
      const newUnion = oldUnion + ` | ${typeName}`
      currentFile = currentFile.replace(oldUnion, newUnion)

      console.log(spacesBullet(6) + `to union: ${typeName}`)
    }
  }

  // Для многострочного union типа
  if (currentFile.includes(exportType) && currentFile.includes('\n  |')) {
    // Находим последний тип в union (последнюю строку с |)
    const lines = currentFile.split('\n')
    let lastUnionLineIndex = -1

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('|')) {
        lastUnionLineIndex = i
      }
    }

    if (lastUnionLineIndex !== -1) {
      // Добавляем новый тип после последнего типа в union
      const newTypeLine = `  | ${typeName}`
      lines.splice(lastUnionLineIndex + 1, 0, newTypeLine)
      currentFile = lines.join('\n')

      console.log(spacesBullet(6) + `to union: ${typeName}`)
    }
  }

  fs.writeFileSync(typesPath, currentFile)

  execSync(`prettier --write ${typesPath}`)
}

// #endregion
