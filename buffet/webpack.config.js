const path = require('path');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { test: /\.svg$/, loader: 'svg-loader?pngScale=2' },
      { test: /\.css$/, loader: 'css-loader' },
    ],
  },
};

module.exports = config;
