const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    // In a single-page-app, this will prevent routes outside of the default `/`
    // from failing with `Cannot GET /pathName`
    historyApiFallback: true,
    publicPath: '/',
    port: 8080,
    host: '0.0.0.0',
  },
  module: {
    // Any loaders go here:
    rules: [
    ],
  },
  plugins: [
  ],
})
