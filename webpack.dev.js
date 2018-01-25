const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  // generate source map to easily debug stuff
  devtool: 'inline-source-map',
  // hot reloading, babe
  // dist folder served on localhost:8080
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      // import css styles
      {
        test: /\.css$/, // all .css files are passed to style and css loaders
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
})
