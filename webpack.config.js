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
        test: /\.ts$/,
        include: [
          path.resolve('src'),
        ],
        loader: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },

  devtool: 'source-map',
}
