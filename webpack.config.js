module.exports = {
  resolve: { modules: ['node_modules', 'src']},
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