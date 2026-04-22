// __automation__/delete-app.ts

import fs from 'fs'
import { execSync } from 'child_process'

const appName = process.argv[2]
if (!appName) {
  console.error('Usage: npm run automation:delete-app <app-name>')
  process.exit(1)
} else {
  deleteApp(appName)
}

function deleteApp(appName: string): void {
  console.log(`🔄 delete-app ${appName}\n`)

  const appPath = `src/apps/${appName}`

  if (!fs.existsSync(appPath)) {
    console.log(`❌ Папка приложения "${appName}" не существует`)
    return
  }

  execSync(`rm -rf ${appPath}`)
  console.log(`   Папка src/apps/${appName} удалена`)

  console.log(`\n✅ Приложение ${appName} удалено!\n`)
}
