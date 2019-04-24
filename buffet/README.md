# Buffet.js

Strapi Components library.

## Install

Install the dependencies:

```bash
yarn
```

## Development

```bash
yarn storybook
```

## Commands

### Generators

```bash
yarn run generate
```

Allows you to auto-generate boilerplate code for common parts of your application, specifically components.

### Lint

```bash
yarn run lint
```

Lints your JavaScript and your CSS.

```bash
yarn run lint:fix
```

Fix your Javascript

### Testing

#### Unit Testing

```bash
yarn run test
```

Tests your application with the unit tests specified in the \*_/tests/_.js files throughout the application.
All the test commands allow an optional -- [string] argument to filter the tests run by Jest. Useful if you need to run a specific test only.

#### Watching

```
yarn run test:watch
```
