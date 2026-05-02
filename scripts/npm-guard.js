// scripts/npm-guard.js

const command = process.argv.slice(2).join(' ')

// Проверяем, что это shadcn
if (command.includes('shadcn')) {
  console.log('shadcn/ui')

  const match = command.match(/add\s+(\S+)/)
  if (match) {
    const component = match[1]
    console.log(`  → adding component: ${component}`)
  }

  process.exit(0)
}
