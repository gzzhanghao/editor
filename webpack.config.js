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
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', { targets: { chrome: '60' } }],
            'react',
          ],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: '#source-map',

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'mobx': 'mobx',
    'mobx-react': 'mobxReact',
  },
}
