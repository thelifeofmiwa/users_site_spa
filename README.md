# Приложение "Сайт с пользователями"

Приложение реализует функционал сайта с пользователями. Получая через API-запрос список пользователей в формате JSON, он преобразует их в объект, и отображает их данные в карточках.
В данном случае - их фотографию, имя и адрес электронной почты. Все данные пользователя можно получить через кнопку подробнее.
На старнице реализована пагинация(постраничный вывод), пользователей можно отсортировать по алфавитному и номерному порядку. Можно найти отдельного пользователя по имени через строку поиска.

Стек:
- Vue 3 Composition API
- Vite (для сборки)
- Typescript
- TailwindCSS
- Axios(для API-запросов)
- crypto-js(для генерации хэша по email)
- Gravatar API(для генерации аватара пользователя по email)

Интересные решения в проекте:
1. Пагинация реализована без сторонних UI-библиотек
2. Весь функционал реализован в отдельных компонентах, и при необходимости масштабирования можно легко переиспользовать уже имеющиеся компоненты

Как запустить приложение (Dev mode)?

Есть два основных варианта:

npm(Стандартный пакетный менеджер NodeJS) 

```sh
npm i
npm run dev
```

yarn(Рекомендованный пакетный менеджер)

```sh
npm install --global yarn
yarn
yarn dev
```

В обоих случаях сначала устанавливаем зависимости, а затем запускаем dev версию. Можно совмещать оба пакетных менеджера.
