const path = require('path')

module.exports = {

  entry: {
    main: './src',
  },

  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve('src'),
        ],
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map',
}
