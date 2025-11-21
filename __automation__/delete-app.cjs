// __automation__/delete-app.cjs

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

function toPascalCase(str) {
  return str.replace(/(^\w|-\w)/g, match => match.replace('-', '').toUpperCase())
}

function toCamelCase(str) {
  return str.replace(/-\w/g, match => match[1].toUpperCase())
}

function removeFromAccumulators(appName, appNamePascal, appNameCamel) {
  const accumulatorsPath = 'src/apps/__accumulators__'

  console.log(`\n🔄 Удаление из аккумуляторов...`)

  // 1. constants.ts
  const constantsPath = path.join(accumulatorsPath, 'constants.ts')
  let constantsContent = fs.readFileSync(constantsPath, 'utf8')
  console.log(`   constants.ts`)

  // Удаляем импорт
  const importConstants = `import { use${appNamePascal}NavigationConstants } from '@apps/${appName}'`
  constantsContent = constantsContent.replace(importConstants + '\n', '')
  console.log(`      removed import: ${importConstants}`)

  // Удаляем из объекта
  constantsContent = constantsContent.replace(
    `useUiNavigationConstants,\n  use${appNamePascal}NavigationConstants,`,
    'useUiNavigationConstants,'
  )
  console.log(`      removed from object: use${appNamePascal}NavigationConstants`)

  fs.writeFileSync(constantsPath, constantsContent)

  // 2. routes.ts
  const routesPath = path.join(accumulatorsPath, 'routes.ts')
  let routesContent = fs.readFileSync(routesPath, 'utf8')
  console.log(`   routes.ts`)

  // Удаляем импорт
  const importRoutes = `import { ${appNameCamel}Routes } from '@apps/${appName}'`
  routesContent = routesContent.replace(importRoutes + '\n', '')
  console.log(`      removed import: ${importRoutes}`)

  // Удаляем из массива
  routesContent = routesContent.replace(`...uiRoutes,\n  ...${appNameCamel}Routes,`, '...uiRoutes,')
  console.log(`      removed from array: ...${appNameCamel}Routes`)

  fs.writeFileSync(routesPath, routesContent)

  // 3. navigation.ts
  const navigationPath = path.join(accumulatorsPath, 'navigation.ts')
  let navigationContent = fs.readFileSync(navigationPath, 'utf8')
  console.log(`   navigation.ts`)

  // Удаляем импорт
  const importNavigation = `import { ${appNameCamel}DomainNavigation } from '@apps/${appName}'`
  navigationContent = navigationContent.replace(importNavigation + '\n', '')
  console.log(`      removed import: ${importNavigation}`)

  // Удаляем из массива
  navigationContent = navigationContent.replace(
    `...dashboard01DomainNavigation,\n    ...${appNameCamel}DomainNavigation,`,
    '...dashboard01DomainNavigation,'
  )
  console.log(`      removed from array: ...${appNameCamel}DomainNavigation`)

  fs.writeFileSync(navigationPath, navigationContent)

  // 4. types.ts
  const typesPath = path.join(accumulatorsPath, 'types.ts')
  let typesContent = fs.readFileSync(typesPath, 'utf8')
  console.log(`   types.ts`)

  // Удаляем импорт
  const importTypes = `import type { ${appNamePascal}DomainRelativePath } from '@apps/${appName}'`
  typesContent = typesContent.replace(importTypes + '\n', '')
  console.log(`      removed import: ${importTypes}`)

  // Удаляем из union типа
  typesContent = typesContent.replace(
    `| UiDomainRoutePath\n  | ${appNamePascal}DomainRelativePath`,
    '| UiDomainRoutePath'
  )
  console.log(`      removed from union: | ${appNamePascal}DomainRelativePath`)

  fs.writeFileSync(typesPath, typesContent)
}

function deleteAppFolder(appName) {
  const appPath = `src/apps/${appName}`

  if (!fs.existsSync(appPath)) {
    console.log(`❌ Папка приложения "${appName}" не существует`)
    return false
  }

  console.log(`\n🗑️  Удаление папки приложения...`)
  execSync(`rm -rf ${appPath}`)
  console.log(`✅ Папка "${appPath}" удалена`)
  return true
}

const appName = process.argv[2]
if (!appName) {
  console.error('Usage: npm run automation:delete-app <app-name>')
  process.exit(1)
}

const appNamePascal = toPascalCase(appName)
const appNameCamel = toCamelCase(appName)

try {
  // 1. Удаляем из аккумуляторов
  removeFromAccumulators(appName, appNamePascal, appNameCamel)

  // 2. Удаляем папку приложения
  const folderDeleted = deleteAppFolder(appName)

  if (folderDeleted) {
    console.log(`\n🎉 Приложение "${appName}" полностью удалено!\n`)
  } else {
    console.log(`\n⚠️  Приложение "${appName}" удалено из аккумуляторов, но папка не найдена\n`)
  }
} catch (error) {
  console.error('\n❌ Ошибка при удалении:', error.message)
  process.exit(1)
}
