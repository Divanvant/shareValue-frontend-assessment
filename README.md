# Share Value Frontend Assessment

[![Netlify Status](https://api.netlify.com/api/v1/badges/7c041ba6-3c9e-4c99-8680-1fed87ea026b/deploy-status)](https://app.netlify.com/sites/extraordinary-kheer-79a146/deploys)

This site is built with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

---

## The instructions

### Build flight search (max 8 hours)

Build an application to book a flight: a user can select a departure and a enter the arrival location, the desired departure date and the number of people. After clicking the search button you get an overview of found flights. If the user can select a flight the user enters his data and the user gets an overview of the data. The focus is on the flight search, the data may be mocked (JSON), or come from an API. Of course it doesn't have to work completely. (For example, only a limited number of destinations) There are no requirements regarding the look & feel.

You must submit the assignment in 2 ways:

1. A link to the demo
2. A link to the repo, so we can review your code and run the application ourselves turn to see how it works.

Good luck!

To be clear: I have specified a maximum number of hours to prevent you from
gets excited and spends 40 hours on it. Less is also possible, of course.

---

## Tasks

- [x] Set up the repository
- [x] Install Vue boilerplate
- [x] Create Netlify environment
- [x] Add the necessary pages
- [x] Create necessary components
  - [x] Flight search input component
  - [x] Flight listing component
- [x] Add dummy data
  - [x] Available airports
  - [x] Available flights given parameters
- [] Add vue3-simple-typeahead instead of inputs for airport fields

## Things I Would live to add but didn't get enough time to

- Validation
- Favicon
- More styling
- GeoLocation
  - For translations and currency
  - For selecting the departure airport
- I18n
- A working API
  - This would open up many more locales
- Support for return and multi-city flights

### General comments

I used vanilla Vue to highlight my understanding of the underlying HTML & CSS. Normally I would use a framework or a component library. This would've saved a lot of time and made the look and feel a bit better with less time spent styling things

I wasted a lot of time looking for a data source. I settled on SkyScanner as it has an API that can be hooked up without changing the data structure the app expects

This was a fun and challenging exercise. Thank you for taking the time to review it!
