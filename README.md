<!-- README.md -->

[**Навигация документации**](./DOCUMENTATION_NAVIGATION.md './DOCUMENTATION_NAVIGATION.md')

---

# react-dev

...

# @mzhvv/framework

**@mzhvv/framework** _(`packages/@mzhvv/framework`)_

- [**Структуру и архитектурные принципы**](#структура-и-архитектурные-принципы)
  - [**Принципы зависимостей**](#принципы-зависимостей)

- **Архитектурные решения:**
  - [**dataConfig**](#dataconfig) - Абстракции: **\_\_accumulator\_\_** и(→) **\_\_aggregator\_\_** - Обеспечивают **поток данных** между `apps` и(→) `main` формируя **конфигурацию данных всего приложения** _(react-dev)_
    - Интеграция с @mzhvv/libs/routers/react-router

## Структура и архитектурные принципы

- **packages** - Независимые библиотеки и утилиты
  - **@mzhvv**
- **core** - Технический фундамент
  - **business** - Бизнес сущности и фичи
    - **entities** и **features**
  - **framework** - Конфигурация приложения
    - **dataConfig** - Конфигурация данных приложения
  - **libs**, **utils**, **types** и т.д. - Уникальные внутренние библиотеки, утилиты, типы и т.д. проекта
- **apps** - Самостоятельные приложения
  - **\_\_accumulator\_\_** - **Аккумулирует данные** из всех `apps/*`
  - **[APP_NAME]** - Самостоятельное приложение _(модуль в монолите или микрофронтенд в монорепозитории). Имеет свои, например: маршрут (но не роутер), ..._
    - `*` - Cоблюдение [Feature-Sliced Design](https://github.com/feature-sliced, 'https://github.com/feature-sliced') _(предпочтительно)_

- **main** - Инфраструктурный слой → Точка входа
  - **\_\_aggregator\_\_** - **Агрегирует данные** в единую **конфигурацию данных приложения** _(react-dev)_ из `apps/__accumulator__` и `main/*`
  - `*` - Cоблюдение [Feature-Sliced Design](https://github.com/feature-sliced, 'https://github.com/feature-sliced')

- **ui** - Независимый ui-кит

&nbsp;

### Принципы зависимостей

- **packages** и **ui** - Ничего не знают о приложении
- **core** - Знает о **packages** и **ui**, но не знает об **apps** и **main**
- **apps** - Каждый из **apps/\*** знает об **packages**, **ui** и **core**, но не знает о другом **apps/\*** и **main**!
  - **\_\_accumulator\_\_** - ⚠️ Единственная точка экспорта из **apps**!
  - **[APP_NAME]**
    - **index** - ⚠️ Внутренний API самостоятельного приложения. Используется исключительно в **apps/accumulator**
- **main** — знает о **packages**, **core** и **ui**, но не знает об **apps**
  - **\_\_aggregator\_\_** - ⚠️ Единственная точка доступа из **main** к **apps**!

&nbsp;

**flow dataConfig:**

`apps/[APP_NAME]/index`  
↓  
`apps/__accumulator__`  
↓  
`main/__aggregator__` → `main/*`  
↑  
`main/*`

**flow dataConfig с итеграцией @mzhvv/.../react-router:**

`apps/[APP_NAME]/app/route` - Маршрут самостоятельного приложения  
↓  
`apps/[APP_NAME]/index` - private API самостоятельного приложения для `apps/__accumulator__/*`  
↓  
`apps/__accumulator__/route` - Аккумулирует все маршруты из `apps/*`  
↓  
`main/__aggregator__/route` - Агрегирует маршрут всего приложения _(REACTDEV)_ → `main/app/router` → `main/app/main` - Точка входа  
↑  
`main/app/route` - Маршрут инфраструктурного хоста

⚠️ **Проблема**:

Приходиться выходить из `src/main/app/*` в `src/main/__aggregator__/*` и после обратно в `src/main/app/*` - Изоляция единой точки **данных** конфигурации приложения **\_\_aggregator\_\_** требует такой намеренной архитектурной условности!

---

---

&nbsp;

## Архитектурные решения / Пакеты-расширения / Интеграции / Адаптеры:

### <span id="acc-agg"></span> **acc-agg** _(`src/packages/@mzhvv/framework/[на данный момент отсутствует]`)_

**Фундаментальный механизм** - Обеспечивает обмен **данных** между абстракциями **\_\_accumulator\_\_** и **\_\_aggregator\_\_**

#### flow:

`src/packages/@mzhvv/framework/[на данный момент отсутствует]`  
↓  
`src/core/framework/acc-agg`

- `./types` - **\_\_accumulator\_\_** и **\_\_aggregator\_\_** используют общие типы для обеспечения типобезопасности при обмене **данными** между абстракциями → [Соблюдение принципов зависимостей](#принципы-зависимостей)

↓  
`src/apps/__accumulator__` и `src/main/__aggregator__`

#### Абстракции:

- **\_\_accumulator\_\_** - Собирает **данные** из всех `src/apps/*`. Единственная точка экспорта из **apps**!
- **\_\_aggregator\_\_** - Агрегирует **данные** в единую конфигурацию приложения из `src/apps/__accumulator__` и `src/main/*`. Единственная точка доступа из **main** к **apps**!

---

---

### <span id="mzhvvlibsroutersreact-router"></span> **@mzhvv/libs/routers/react-router** _(`src/packages/@mzhvv/libs/routers/react-router`)_

@mzhvv/.../react-router предстовлят из себя не смысовой "модуль" - "PCRNC" построенный на `react-router`

#### flow:

path (Пути)  
↓  
config (Конфигурация) -> navigation (Навигация) <- constanst (Константы)  
↓  
route (Маршруты) -> routercreateBrowserRouter(route)

#### <span id="интеграция-c-mzhvvlibsroutersreact-router"></span> Интеграция с [acc-agg](#acc-agg)

#

---

<!-- &nbsp;



- **npm-скрипты:**
  - Создание нового **apps/\***

  ```npm
  npm create-app
  ```

  - Уудаление **apps/\***

  ```npm
  npm delete-app
  ``` -->
