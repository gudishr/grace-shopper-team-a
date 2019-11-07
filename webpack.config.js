module.exports = {
  resolve: { modules: ['node_modules', 'src'], extension: ['', '.js', '.scss'] },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};