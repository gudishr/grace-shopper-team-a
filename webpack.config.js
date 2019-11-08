const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + 'index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
        }
      ]
    }
  }
    