module.exports = {
  resolve: { modulesDirectories: ['node_modules', 'src'] },
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