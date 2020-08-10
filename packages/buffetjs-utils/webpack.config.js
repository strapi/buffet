const webpack = require('webpack');

const packageJson = require('./package.json');

const nodeModules = [];
[
  ...Object.keys(packageJson.dependencies),
  ...Object.keys(packageJson.peerDependencies),
  ...Object.keys(packageJson.devDependencies),
].forEach(module => {
  nodeModules.push(new RegExp(`^${module}(/.+)?$`));
});

const bundleConfig = {
  externals: nodeModules,
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|lib)/,
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || 'development',
    }),
  ],
  resolve: {
    extensions: ['*', '.js'],
    cacheWithContext: false,
  },
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    filename: `bundle.${process.env.NODE_ENV || 'development'}.js`,
    library: packageJson.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};

module.exports = [bundleConfig];
