# Buffet.js Icons

## Getting Started

### Installation

Using yarn

```bash
yarn add @buffetjs/icons
# Install the required dependencies
yarn add prop-types react styled-components
```

or npm

```bash
npm install @buffetjs/icons --save
# Install the required dependencies
npm install prop-types react styled-components --save
```

### Contributing

In order to add a new icon, you can design your svg using Sketch or another design toolkit.

Then you need to clean your svg:

```
npm install -g svgo

svgo my-svg.svg
```

Finally transform the cleaned svg to a React Component.

### Available commands

- **build**<br/>
  Builds the library for production
- **build:analyze**<br/>
  Analyse the generated build
- **build:watch**<br/>
  Whatch the files with webpack
- **build:watch:esm**<br/>
  Whatch the files with babel
- **create:index**<br/>
  Create the `build/index.js` file
- **test**<br/>
  Runs the entire set of test: lint, style and jest
- **test:jest**<br/>
  Runs the unit tests
- **test:jest:watch**<br/>
  Runs the unit tests in watch mode
- **test:lint**<br/>
  Runs the lint tests
- **test:lint:quiet**<br/>
  Runs the lint tests without displaying the warnings
- **test:style**<br/>
  Runs the stylelint tests
- **test:style:quiet**<br/>
  Runs the stylelint tests without displaying the warnings
- **lint:fix**<br/>
  Fixes the lint
