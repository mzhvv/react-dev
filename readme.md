`__automation__` - автомитизация создания apps

src/react-dev - главное приложения
src/apps - самостоятельные приложеня
src/core/_ - переиспользуемые унифицированые библиотеги и утилиты
src/global/_

- features - глобальы фичи!
  - i18n - может использоваться во всех apps!
  - theme - каздый apps имеет доступ к publicAPI переключения темы всего приложения!
- types - переиспользуемые типы!

Тоесть core и global разделены как имеют фундоментальые отличия!

src/ui - ui-kit

#

Структура зависимостей:
text
✅ ПРАВИЛЬНО:

ui ──────┐
▼
core ──→ global ──→ apps ──→ react-dev
│
└── store (центр!)

Слой Знает о Не знает о
core ничего бизнес
global core apps
store core UI
apps global, ui другие apps
react-dev всё -

#
