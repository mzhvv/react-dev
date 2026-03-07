<!-- src/packages/@mzhvv/framework/README.md -->

# @mzhvv/framework _(`src/packages/@mzhvv/framework`)_

**@mzhvv/framework** предоставляет:

- [**Структуру и архитектурные принципы**](#структура-и-архитектурные-принципы)
  - [**Принципы зависимостей**](#принципы-зависимостей)

- **Архитектурные решения / Пакеты-расширения / Интеграции / Адаптеры:**
  - [**acc-agg**](#acc-agg) - **Фундаментальный механизм** - Обеспечивает обмен **данных** между абстракциями \_\_accumulator\_\_ и \_\_aggregator\_\_ _(`src/core/framework/acc-agg` ← `src/packages/@mzhvv/framework/[на данный момент отсутствует]`)_
    - [Интеграция с **@mzhvv/libs/routers/react-router**](#интеграция-c-mzhvvlibsroutersreact-router)

- **npm-скрипты:**
  - Создание нового **apps/\***

  ```npm
  npm create-app
  ```

  - Уудаление **apps/\***

  ```npm
  npm delete-app
  ```

## Структура и архитектурные принципы

- **packages** - Независимые библиотеки и утилиты
  - **framework/\***, **libs/\***, **utils/\***
- **core** - Технический фундамент
  - **business/entities** и **features** - Бизнес сущности и фичи
  - **framework** - Конфигурация приложения
    - **acc-agg**
  - **libs/\*** и **utils/\***, **types/\*** и т.д. - Уникальные внутренние библиотеки и утилиты, типы и т.д. проекта
- **apps** - Самостоятельные приложения _(модули в монолите или микрофронтенды в монорепозитории)_
  - **\_\_accumulator\_\_** - Собирает **данные** из всех `src/apps/*`
- **main** - Точка входа
  - **\_\_aggregator\_\_** - Агрегирует **данные** в единую конфигурацию приложения из `src/apps/__accumulator__` и `src/main/*`
- **ui**

⚠️ **:**

`src/core/business/*` и `src/core/framework/*` - Вынесены как модули  
`src/apps/[Самостоятельные приложения]/*` [**FSD**](https://github.com/feature-sliced, 'https://github.com/feature-sliced') _(предпочтительно)_  
Разрешена группировка, например: `src/apps/@mzhvv/*`  
`src/main/*` [**FSD**](https://github.com/feature-sliced, 'https://github.com/feature-sliced') + **\_\_aggregator\_\_**

### Принципы зависимостей

- **packages** и **ui** - Ничего не знают о приложении
- **core** - Знает о **packages** и **ui**, но не знает об **apps** и **main**
- **apps** - Каждый из **apps/\*** знает об **packages**, **ui** и **core**, но не знает о другом **apps/\*** и **main**!
  - **\_\_accumulator\_\_** - ⚠️ Единственная точка экспорта из **apps**!
- **main** — знает о **packages**, **core** и **ui**, но не знает об **apps**
  - **\_\_aggregator\_\_** - ⚠️ Единственная точка доступа из **main** к **apps**!

⚠️ **:**

**apps/\*** не знает об другом **apps/\*** **!!!**  
**\_\_accumulator\_\_** доступен только в **\_\_aggregator\_\_**  
**\_\_aggregator\_\_** доступен только в **main/\***

⚠️ **Проблема**:

Приходиться выходить из `src/main/app/*` в `src/main/__aggregator__/*` и после обратно в `src/main/app/*` - Изоляция единой точки **данных** конфигурации приложения **\_\_aggregator\_\_** требует такой намеренной архитектурной условности!

## Архитектурные решения / Пакеты-расширения / Интеграции / Адаптеры:

### <span id="acc-agg"></span> **acc-agg** _(`src/packages/@mzhvv/framework/[на данный момент отсутствует]`)_

**Фундаментальный механизм** - Обеспечивает обмен **данных** между абстракциями **\_\_accumulator\_\_** и **\_\_aggregator\_\_**

`src/packages/@mzhvv/framework/[на данный момент отсутствует]`  
↓  
`src/core/framework/acc-agg`  
↓  
**Абстракции:**

- `src/apps/__accumulator__`- Собирает **данные** из всех `src/apps/*`. Единственная точка экспорта из **apps**!
- `src/main/__aggregator__` - Агрегирует **данные** в единую конфигурацию приложения из `src/apps/__accumulator__` и `src/main/*`. Единственная точка доступа из **main** к **apps**!

**\_\_accumulator\_\_** и **\_\_aggregator\_\_** используют общие типы `src/core/framework/acc-agg/*/types` для обеспечения типобезопасности при обмене **данными** между абстракциями → [Соблюдение принципов зависимостей](#принципы-зависимостей)

<span id="интеграция-c-mzhvvlibsroutersreact-router"></span> **Интеграция с** [**@mzhvv/libs/routers/react-router**](#mzhvvlibsroutersreact-router)

...

### <span id="mzhvvlibsroutersreact-router"></span> **@mzhvv/libs/routers/react-router** _(`src/packages/@mzhvv/libs/routers/react-router`)_

...
