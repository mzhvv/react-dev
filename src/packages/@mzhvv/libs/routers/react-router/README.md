<!-- src/packages/@mzhvv/libs/routers/react-router/README.md -->

# @mzhvv/routers/react-router (`src/packages/@mzhvv/libs/routers/react-router`)

## ⚠️ Правила импорта

**index** отсутствует! (`src/packages/@mzhvv/libs/routers/react-router`)

Импорт:

```ts
import type {} from '@mzhvv/libs/routers/react-router/config/[Содержание]/*'
import {} from '@mzhvv/libs/routers/react-router/config/[Содержание]/*'
```

## `@mzhvv/routers/react-router` cодержит:

- **config** - Типы для конфигурации маршрутов (**configRoute и [apps/\*]ConfigRoute**)
  - [**types**](./config/types/readme.md 'src/packages/@mzhvv/libs/routers/react-router/config/types/README.md')
- **route**
  - типы для маршрутов
  - builder - постройка марштутов из конфигурации **config**
- **navigation**
  - типы
    - для навигации
    - для констант
  - builder - постройка навигации из конфигурации **config**
- **types** - типы для `@mzhvv/libs/routers/react-router/*` и переиспользования в приложении
