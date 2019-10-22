# Buffet.js Icons

## Getting Started

### Installation

Using yarn

```bash
yarn add @buffetjs/icons
# Install the required dependencies
yarn add lodash prop-types react react-dom react-router-dom styled-components
```

or npm

```bash
npm install @buffetjs/icons --save
# Install the required dependencies
npm install lodash prop-types react react-dom react-router-dom styled-components --save
```

### Contributing

In order to add a new icon, you can design your svg using Sketch or another design toolkit.

Then you need to clean your svg:

```
npm install -g svgo

svgo my-svg.svg
```

Finally transform the cleaned svg to a React Component.
