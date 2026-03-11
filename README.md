<!-- prettier-ignore-start -->
<!-- prettier-ignore-end -->

<!-- README.md -->

[**Навигация документации**](./DOCUMENTATION_NAVIGATION.md './DOCUMENTATION_NAVIGATION.md')

---

# react-dev

... И появился @mzhvv/framework - Исключительно для личного использования и улучшения DX

# @mzhvv/framework

**`@mzhvv/framework`** _(`./src/packages/@mzhvv/framework`)_

- [**Структуру и архитектурные принципы**](#структура-и-архитектурные-принципы)
  - [**Принципы зависимостей**](#принципы-зависимостей)
- [**Архитектурные проблемы и решения**](#архитектурные-проблемы-и-решения)

## Структура и архитектурные принципы

_Структура отсортирована по потоку зависимостей_

- **ui** _`@ui`_
- **packages** _`@packages`_
  - **@mzhvv** _`@mzhvv`_
- **core** _`@core` (Технический фундамент)_ - Конфигурация приложения **react-dev**
  - **configs**
    - **framework**
      - **dataConfig**
- **business** _`@business`_ - Глобальная Бизнес-логика
  - **entities** - Бизнес-сущности
  - **features** - Бизнес-фичи
- **apps** _~~`@apps`~~ (Микрофронтенды → Аккумулятор)_
  - **[MICROFRONTEND]** _`@MICROFRONTEND`_ - _Имеет свои, например: маршрут, но не роутер; ..._
  - **\_\_accumulator\_\_** _`@accumulator`_ - Аккумулирует управляемые данные _(например: маршруты)_ из всех [MICROFRONTEND]
- **main** _`@main` (Инфраструктурный слой (main/\* ↔ Агрегатор. [⚠️ подробнее](#)) → Точка входа)_
  - **\_\_aggregator\_\_** _`@aggregator`_- Агрегирует в единую конфигурацию управляемые данные из `@accumulator` и main/\*

### Принципы зависимостей

- **ui** и **packages** - Ничего не знают
- **core** - Знает об **ui** и **packages** , но не знает об **business**, **apps** и **main**
- **business** - Знает об **ui**, **packages** и **core**, но не знает об **apps** и **main**
- **apps** - Знает об **ui**, **packages**, **core** и **business**, но не знает о **main**
  - **[MICROFRONTEND]** - не знают друг о друге
  - **\_\_accumulator\_\_** - ⚠️ единственный экспорт из **apps**
- **main** — знает о **ui**, **packages**, **core** и **business**, ⚠️ но не знает о **apps**!
  - **\_\_aggregator\_\_** - ⚠️ Единственный доступ к **apps** через `@accumulator`

## Архитектурные проблемы и решения

### проблема 1

...

Приходиться выходить из `./src/main/app/*` в `./src/main/__aggregator__/*` и после обратно в `./src/main/app/*` - Изоляция единой точки **данных** конфигурации приложения **\_\_aggregator\_\_** требует такой намеренной архитектурной условности!

...

- [**dataConfig**](#dataconfig) - Абстракции: **\_\_accumulator\_\_** и(→) **\_\_aggregator\_\_** - Обеспечивают управляемый поток данных между **apps** и(→) **main** формируя единую конфигурацию всех управляемых данных приложения _(react-dev)_
  - Интеграция с `@mzhvv/libs/routers/react-router` _(`./src/packages/@mzhvv/libs/routers/react-router`)_

...

### проблема 2

...

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
