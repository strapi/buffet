const webpack = require('webpack');
const path = require('path');
const packageJson = require('./package.json');

const nodeModules = [];
[
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies),
  ...Object.keys(packageJson.devDependencies),
].forEach(module => {
  nodeModules.push(new RegExp(`^${module}(/.+)?$`));
});

module.exports = {
  entry: `${__dirname}/src/index.js`,
  externals: nodeModules,
  mode: process.env.NODE_ENV,
  output: {
    path: `${__dirname}/build`,
    filename: `bundle.${process.env.NODE_ENV || 'development'}.js`,
    library: packageJson.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        exclude: /(node_modules|lib)/,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
    cacheWithContext: false,
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || 'development',
    }),
  ],
};
