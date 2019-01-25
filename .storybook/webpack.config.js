const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpeg)$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, '../')],
            },
          },
        ],
      },
    ],
  },
};
