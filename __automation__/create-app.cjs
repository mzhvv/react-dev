// __automation__/create-app.cjs

const fs = require('fs')
const path = require('path')

function toPascalCase(str) {
  return str.replace(/(^\w|-\w)/g, match => match.replace('-', '').toUpperCase())
}

function toCamelCase(str) {
  return str.replace(/-\w/g, match => match[1].toUpperCase())
}

function toConstCase(str) {
  return str.replace(/-/g, '_').toUpperCase()
}

function replaceInFiles(dir, replacements) {
  const files = fs.readdirSync(dir, { recursive: true })

  // console.log(`   Found ${files.length} files in ${dir}`) // 🔧

  files.forEach(file => {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isFile()) {
      console.log(`   ${filePath}`)
      let content = fs.readFileSync(filePath, 'utf8')

      Object.entries(replacements).forEach(([search, replace]) => {
        const matches = content.match(new RegExp(search, 'g'))
        if (matches) {
          console.log(`      "${search}" → "${replace}" (${matches.length} matches)`)
        }
        content = content.replace(new RegExp(search, 'g'), replace)
      })

      fs.writeFileSync(filePath, content)
    }
  })
}

function addImport(content, importStmt, importType = 'import {') {
  const importEnd = content.lastIndexOf(importType)
  if (importEnd !== -1) {
    const nextLine = content.indexOf('\n', importEnd) + 1
    return content.substring(0, nextLine) + importStmt + '\n' + content.substring(nextLine)
  }
  return content
}

function addToAccumulators(appName, appNamePascal, appNameCamel) {
  const accumulatorsPath = 'src/apps/__accumulators__'

  // 1. constants.ts
  const constantsPath = path.join(accumulatorsPath, 'constants.ts')
  let constantsContent = fs.readFileSync(constantsPath, 'utf8')
  console.log(`   constants.ts`)

  const importConstants = `import { use${appNamePascal}NavigationConstants } from '@apps/${appName}'`
  constantsContent = addImport(constantsContent, importConstants)
  console.log(`      import: ${importConstants}`)

  constantsContent = constantsContent.replace(
    'useUiNavigationConstants,',
    `useUiNavigationConstants,\n  use${appNamePascal}NavigationConstants,`
  )
  console.log(`      to object: use${appNamePascal}NavigationConstants`)

  fs.writeFileSync(constantsPath, constantsContent)

  // 2. routes.ts
  const routesPath = path.join(accumulatorsPath, 'routes.ts')
  let routesContent = fs.readFileSync(routesPath, 'utf8')
  console.log(`   routes.ts`)

  const importRoutes = `import { ${appNameCamel}Routes } from '@apps/${appName}'`
  routesContent = addImport(routesContent, importRoutes)
  console.log(`      import: ${importRoutes}`)

  routesContent = routesContent.replace('...uiRoutes,', `...uiRoutes,\n  ...${appNameCamel}Routes,`)
  console.log(`      to array: ...${appNameCamel}Routes`)

  fs.writeFileSync(routesPath, routesContent)

  // 3. navigation.ts
  const navigationPath = path.join(accumulatorsPath, 'navigation.ts')
  let navigationContent = fs.readFileSync(navigationPath, 'utf8')
  console.log(`   navigation.ts`)

  const importNavigation = `import { ${appNameCamel}DomainNavigation } from '@apps/${appName}'`
  navigationContent = addImport(navigationContent, importNavigation)
  console.log(`      import: ${importNavigation}`)

  navigationContent = navigationContent.replace(
    '...dashboard01DomainNavigation,',
    `...dashboard01DomainNavigation,\n    ...${appNameCamel}DomainNavigation,`
  )
  console.log(`      to array: ...${appNameCamel}DomainNavigation`)

  fs.writeFileSync(navigationPath, navigationContent)

  // 4. types.ts
  const typesPath = path.join(accumulatorsPath, 'types.ts')
  let typesContent = fs.readFileSync(typesPath, 'utf8')
  console.log(`   types.ts`)

  const importTypes = `import type { ${appNamePascal}DomainRelativePath } from '@apps/${appName}'`
  typesContent = addImport(typesContent, importTypes, 'import type')
  console.log(`      import: ${importTypes}`)

  typesContent = typesContent.replace(
    '| UiDomainRoutePath',
    `| UiDomainRoutePath\n  | ${appNamePascal}DomainRelativePath`
  )
  console.log(`      to union: | ${appNamePascal}DomainRelativePath`)

  fs.writeFileSync(typesPath, typesContent)
}

function renameTemplateFiles(appDir, appName) {
  console.log(`\n🔄 Переименование файлов...`)

  const templateAppFile = path.join(appDir, 'pages', 'template-app.tsx')
  const newAppFile = path.join(appDir, 'pages', `${appName}.tsx`)

  if (fs.existsSync(templateAppFile)) {
    fs.renameSync(templateAppFile, newAppFile)
    console.log(`    template-app.tsx → ${appName}.tsx`)
  }
  console.log(`✅ Все файлоы переименованы`)
}

const appName = process.argv[2]
if (!appName) {
  console.error('Usage: npm run apps:create <app-name>')
  process.exit(1)
}

const appNamePascal = toPascalCase(appName)
const appNameCamel = toCamelCase(appName)
const appNameConst = toConstCase(appName)

// 1. Копируем шаблон
const { execSync } = require('child_process')
execSync(`cp -r src/apps/__template-app__ src/apps/${appName}`)
console.log(`\n✅ Шаблон "__template-app__" успешно скопирован как "${appName}"`)

// 2. Переименовываем файлы
renameTemplateFiles(`src/apps/${appName}`, appName)

// 3. Заменяем все варианты
console.log('\n🔄 Замена шаблонных значений...')
replaceInFiles(`src/apps/${appName}`, {
  '__template-app__': appName, // исправляем пути в импортах
  '@apps/__template-app__': `@apps/${appName}`, // алиасы
  'template-app': appName, // my-awesome-app
  TemplateApp: appNamePascal, // MyAwesomeApp
  templateApp: appNameCamel, // myAwesomeApp
  TEMPLATE_APP: appNameConst, // MY_AWESOME_APP
})
console.log('✅ Все значения заменены!')

// 4. Добавляем в аккумуляторы (после успешного создания)
console.log('\n🔄 Интеграция с аккумуляторами...')
addToAccumulators(appName, appNamePascal, appNameCamel)
console.log('✅ Интеграция завершена!')

console.log(`\n🎉 Приложение "${appName}" полностью готово к использованию!\n`)
