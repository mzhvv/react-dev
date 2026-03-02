<!-- src/packages/@mzhvv/framework/README.md -->

# @mzhvv/framework (`src/packages/@mzhvv/framework`)

**@mzhvv/framework** предоставляет:

- **Структуру и архитектурные принципы**
- **Пакеты-расширения и абстракции**
  - **acc-agg** (`src/packages/@mzhvv/framework/acc-agg`) - абстракции **\_\_accumulator\_\_** и **\_\_aggregator\_\_**
- **npm-скрипты**
  - `create-app` - создание нового **apps/\***
  - `delete-app` - удаление **apps/\***

## Структура и архитектурные принципы

- **packages** - Независимые библиотеки
- **core** - Технический фундамент
  - **business/entities** и **features** - Бизнес сущности и фичи
  - **libs (в т.ч. acc-agg[^acc-agg]), types** и т.д. - Внутренние библиотеки, типы и т.д. проекта
- **ui** - Ui-kit
- **apps** - Самостоятельные приложения (модули в монолите или микрофронтенды в монорепозитории)
  - **\_\_accumulator\_\_** - Собирает данные из всех `src/apps/*`
- **main** - Точка входа
  - **\_\_aggregator\_\_** - Агрегирует данные в единую конфигурацию приложения из `src/apps/__accumulator__` и `src/main/*`

[^acc-agg]: _`src/apps/__accumulator__` и `src/main/__aggregator__` используют общие типы, формируемые из `src/packages/@mzhvv/framework/acc-agg`, для обеспечения типобезопасности при обмене данными между модулями. И соблюдения принципов зависимостей - **core** → **apps** и **main**_

### Принципы зависимостей

- **packages** и **ui** - Ничего не знают о приложении
- **core** - Знает о **packages** и **ui**, но не знает об **apps** и **main**
- **apps** - Каждый из **apps/\*** знает об **packages**, **ui** и **core**, но не знает о другом **apps/\*** и **main**!
  - **\_\_accumulator\_\_** - ⚠️ Единственная точка экспорта из **apps**!
- **main** — знает о **packages**, **core** и **ui**, но не знает об **apps**
  - **\_\_aggregator\_\_** - ⚠️ Единственная точка доступа из **main** к **apps**!

⚠️ **Проблема**:

- Приходиться выходить из `src/main/app/*` в `src/main/__aggregator__/*` и после обратно в `src/main/app/*` - Изоляция единой точки данных конфигурации приложения **\_\_aggregator\_\_** требует такой намеренной архитектурной условности!

## Пакеты расширения/Абстракции

### **@mzhvv/framework/acc-agg** (`src/packages/@mzhvv/framework/acc-agg`)

**@mzhvv/framework/acc-agg предоставляет:**

- **types** - Обеспечивает типобезопасность при обмене данными между модулям **apps** (`src/apps/__accumulator__`) и **main** (`src/main/__aggregator__`)

**Абстракции:**

- **\_\_accumulator\_\_** - Собирает данные из всех `src/apps/*`. Единственная точка экспорта из **apps**!
- **\_\_aggregator\_\_** - Агрегирует данные в единую конфигурацию приложения из `src/apps/__accumulator__` и `src/main/*`. Единственная точка доступа из **main** к **apps**!

<!-- ## Методы

### `create-app`

Создание нового приложения/модуля

### `delete-app`

Удаление приложения/модуля -->

---

<!-- ### FLOW

#### Например @router:

Конфигурируем объекты/источники истины роутов каждомго приложении и точки входа на основе типов из **packages/@mzhvv/router/routes/types →**
`apps/*/shared/types/prnc → apps/*/app/routes` и
`main/shared/types/prnc → main/app/routes`
↓
Собираем/аккумулируем роуты из **apps/\***
`apps/*/app/routes → apps/__accumulators__/routes`
↓
Конфигурируем/агрегируем роуты всего приложения
`apps/__accumulators__/routes → main/__aggregator__/routes` и
`main/app/routes.tsx → main/__aggregator__/routes`
↓
`main/__aggregator__/routes → main/app/router.tsx` ← Строим с помощью **packages/@mzhvv/router/routes/builder**
↓
`main/app/router → main/app/providers -> main/app/main(точка входа)`

_**PRNC** (Paths-Routes-Navigations-Constants) — объединенные типы по смыслу
**Конфигурируем объекты/источники истины в 1 шаге** - Из нее в дальнейшем можно построить навигацию с помощью **packages/@mzhvv/router/navigation/builder**_

⚠️ **routes в app по FSD** - Считаю, что это правильное место для его расположения! В приложении(app) есть роуты(app/routes), в нем страницы(pages) — это ЛОГИЧНО! В shared — БРЕД! -->
