const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/react']
        }
      }
    ]
  }
};