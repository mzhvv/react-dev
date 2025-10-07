
src/main.tsx <- react-dev <- lib <- apps
src/main.tsx <────────────── lib <- apps
ui - ДОСТУПЕН ВЕЗДЕ! ВКЛЮЧАЯ ui/hooks, ui/lib и т.д.
КРОСС-ИМПОРТ lib И apps ЗАПРЕЩЕН!





# react-dev

## Струкрута

src/main.tsx <- lib <-> react-dev / apps <- ui

src/
├── main.tsx - Точка входа
├── index.css
├── apps/
│   ├── react-dev/ - Обертка всех проектов (apps)
│   │   ├── app 
│   │   │   ├── routes.tsx - Пути проекта
│   │   │   └── navigation.tsx - Навигация проекта
│   │   └── index.ts - ДОПУСТМЫ ЭКСПОРТЫ ТОЛЬКО: routes.tsx, navigation.tsx
│   ├── .../ - Самостоятельные проекты имеющие свою архетекруру и т.д.
│   ├── navigation-accumulate.ts - (аккумулирует все .../apps/*/app/routes.tsx)
│   ├── routes-accumulate.ts - (аккумулирует все .../apps/*/app/navigation.tsx)
│   └── index.ts - ДОПУСТМЫ ЭКСПОРТЫ ТОЛЬКО: navigation-accumulate.ts, routes-accumulate.ts
├── libs/ - Библиотеки связывающие apps c src/main.tsx и обеспечивает кросс-импорты меужу проектами (apps)
│   ├── router/         # Маршрутизатор
│   └── navigation/     # Навигация (аккумулятор)
└── ui/ - ui-kit (глобальный)

src/
├── main.tsx
├── index.css
│
├── apps/
│   ├── react-dev/          # Главный app-хоств
│   │   ├── app/
│   │   │   ├── routes.tsx  # Routes реакт-дева
│   │   │   └── navigation.tsx
│   │   └── index.ts        # exports { routes, navigation }
│   │
│   ├── .../                # Другие независимые apps
│   ├── navigation-accumulate.ts  # Аккумулятор навигации ВСЕХ apps
│   ├── routes-accumulate.ts      # Аккумулятор routes ВСЕХ apps  
│   └── index.ts            # exports { accumulatedNav, accumulatedRoutes }
│
├── libs/
│   ├── router/             # Использует routes-accumulate
│   └── navigation/         # Использует navigation-accumulate
│
└── ui/
    └── ...                 # Общий UI-кит