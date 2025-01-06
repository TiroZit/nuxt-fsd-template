# nuxt-fsd-template

## Stack:
1. [Nuxt 3](https://nuxt.com/)
2. [Typescript](https://www.typescriptlang.org/)
3. [Feature-Sliced Design](https://feature-sliced.design/)
4. [Steiger](https://github.com/feature-sliced/steiger)
5. [Husky (pre-commit)](https://typicode.github.io/husky/)
6. [Eslint (by antfu config)](https://github.com/antfu/eslint-config)

## Setup

Установка зависимостей:

```bash
npm install
```

## NPM scripts

### `build`
Запускает процесс сборки проекта:
- Выполняет проверку типов с использованием `npx nuxi typecheck`.
- Запускает линтинг с помощью `npm run lint`.
- Собирает проект с использованием `nuxt build`.

### `dev`
Запускает режим разработки для Nuxt с помощью команды `nuxt dev`.

### `steiger`
Запускает инструмент `steiger` для проверки файлов в папке `./src`.

### `steiger-watch`
Запускает `steiger` с параметром `-w`, что включает режим отслеживания изменений файлов в папке `./src`.

### `generate`
Генерирует статические файлы проекта с использованием `nuxt generate`.

### `preview`
Запускает сервер предпросмотра для проверки сгенерированных файлов с помощью `nuxt preview`.

### `postinstall`
Готовит проект после установки зависимостей с помощью `nuxt prepare`.

### `lint`
Запускает инструмент `steiger` для проверки файлов и затем выполняет линтинг кода с помощью `eslint --fix`.

### `pre-commit`
Запускает `steiger` и затем выполняет линтинг для файлов, которые были изменены перед коммитом, с использованием `lint-staged` с конфигурацией из `lint-staged.config.js`.

### `prepare`
Настроивает Husky для работы с предкоммитными хуками с помощью команды `husky`.


## [Nuxt routing](https://feature-sliced.design/ru/docs/guides/tech/with-nuxtjs#%D1%80%D0%BE%D1%83%D1%82%D0%B8%D0%BD%D0%B3-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D0%B0)
