<!-- src/packages/@mzhvv/framework/README.md -->

# # `packages/@mzhvv/framework` (`@mzhvv/react-framework`)

## Структура

- **packages** - Независимые библиотеки
- **core** - Технический фундамент
  - **business**
    - **entities и features** - Бизнес сущности и фичи
  - **libs, types** и т.д. - Внутренние библиотеки, типы и т.д. проекта
- **ui** - Ui-kit
- **apps** - Самостоятельные приложения модули в монолите или микрофронтенды в монорепозиторий
  - **\_\_accumulators\_\_** - Абстракция-аккумулятор → Аккумулирует управляемые данные из **apps/\***
- **react-dev** - Точка входа
  - **\_\_aggregator\_\_** - Абстракция-агрегатор/Конфигурация всего приложения → Cобирает управляемые данные из **apps/\_\_accumulators\_\_** и **react-dev/\***

## Принципы зависимостей

- **packages** и **ui** - ничего не знают о приложении
- **core** - знает **packages** и **ui**, но не знает об **apps** и **react-dev**
- **apps** - знает **packages**, **core** и **ui**, но не знает об **react-dev**
  - **\_\_accumulators\_\_** - ⚠️ Только здесь **apps** открываются наружу. Единственный экспорт из **apps**!
- **react-dev** — знает **packages**, **core** и **ui**, но не знает об **apps**
  - **\_\_aggregator\_\_** - ⚠️ Только здесь **react-dev** узнает об **apps**

## FLOW

### Например @router:

Конфигурируем объекты/источники истины роутов каждомго приложении и точки входа на основе типов из **packages/libs/@router/routes/types →**  
`apps/*/shared/types/prnc → apps/*/app/routes` и  
`react-dev/shared/types/prnc → react-dev/app/routes`  
↓  
Собитаем/аккомулируем роуты из **apps/\***  
`apps/*/app/routes → apps/__accumulators__/routes`  
↓  
Конфигурируем/агрегируем роуты всего приложения  
`apps/__accumulators__/routes → react-dev/__aggregator__/routes` и  
`react-dev/app/routes.tsx → react-dev/__aggregator__/routes`  
↓  
`react-dev/__aggregator__/routes → react-dev/app/router.tsx` ← Строим c помощью **packages/libs/@router/routes/builders**  
↓  
`react-dev/app/router → react-dev/app/providers -> react-dev/app/main(точка входа)`

_**PRNC** (Paths-Routes-Navigations-Constants) — объединенные типы по смыслу  
**Конфигурируем объекты/источники истины в 1 шаге** - Из нее в дальнейшем можно построить навигацию c помощью **packages/libs/@router/navigation/builders**_

⚠️ **routes в app по FSD** - Считаю, что это правильное место для его расположения! В приложении(app) есть роуты(app/routes), в нем страницы(pages) — это ЛОГИЧНО! В shared — БРЕД!

⚠️ **Проблема/Намеренная архитектурная условность** - Мне очень не нравиться что приходиться выходить из **react-dev/app/routes** в **react-dev/\_\_aggregator\_\_/routes** и после обратно в **react-dev/app/router** но, лучше решения (на данный момент) не нашел! Единая точка конфигурации приложений и изоляция требуют такой абстракции/намеренной архитектурной условности!

## И П.С.
