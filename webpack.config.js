/* eslint-disable */

const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    main: './source/js/index.js',
    vendor: './source/js/vendor.js',
  },
  devtool: process.env.NODE_ENV ? false : 'source-map',
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

/* eslint-enable */
