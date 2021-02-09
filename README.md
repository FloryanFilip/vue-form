# Create new user form

A simple one-step form to display my 'craftmanship' written in Vue. 
(Please excuse this repository being an enormous single-commit monster, that's not how I work but due to time constraints it was most convenient to do so)

## Technologies

- [**Vue CLI**](https://cli.vuejs.org/)
- [Jest](https://jestjs.io/) alongside [Vue-test-utils](https://vue-test-utils.vuejs.org/) for running unit tests;
- [Cypress](https://cypress.io) for running E2E tests;
- [Mock Service Worker](https://github.com/mswjs/msw) to mock REST requests;


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```
(Note: for this to work your local dev server have to be up at ` http://localhost:8080/ `. Run `npm run serve` beforehand. If it still fails on your machine or takes forever to complete, please run `npm run cy:ui` to run integration tests with Cypress UI).
If you wish to use another address as your host, please change `baseUrl` property in [cypress.json](./cypress.json)

### Run your unit tests
```
npm run test:unit
```

### Run Cypress UI
```
npm run cy:ui
```
