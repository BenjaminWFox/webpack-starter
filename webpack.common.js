const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = require('./webpack.config.resolve')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/index.js')],
    // Other entries can be added here to split out heavy files
    // see: https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
  },
  resolve,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].bundle.js',
    publicPath: '/',
  },
  optimization: {
    moduleIds: 'deterministic',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
}
