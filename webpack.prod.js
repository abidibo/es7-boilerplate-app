const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  // generate source map to easily debug stuff
  devtool: 'source-map',
  plugins: [
    // minify, remove dead code...
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // define environment variable
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // extract and split css in files
    // faster than inline bundled css because this way css in downloaded in parallel to the js bundle
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    // extract and split css in files
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  }
})
