const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const resolve = require('./webpack.config.resolve')

module.exports = {
  /**
   * `entry` tells webpack where to start building the dependency graph.
   * This could be a single line, but the object syntax allows for greater
   * flexibility in the future.
   */
  entry: {
    /**
     * The key `app` will be the [name] of your output file.
     * `path.resolve` turns a sequence of paths into an absolute path.
     * `__dirname` is a nodejs kind-of-not-really-global that
     *   is equal to the directory of the currently running file.
     * */
    app: [path.resolve(__dirname, 'src/index.js')],
    // Other entries can be added here to split out heavy files
    // see: https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
  },
  /**
   * `resolve` is for creating alias paths. This allows you
   * to use the syntax `import module from 'Alias/subfolder'`
   * in your imports, removing the need to remember relative
   * paths to import modules from other parts of your code.
   */
  resolve,
  /**
   *
   */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].bundle.js',
    publicPath: '/',
  },
  /**
   * The `module` object is mainly used for building the `rules` that will be run
   * against imported modules.
   */
  module: {
    /**
     * The `rules` array allows you to specify 'loaders' which are a way of
     * transforming module source code as it is imported. The examples below
     * will convert any image/font file to a dataUrl (`url-loader`), and
     * transpile javascript into more compatible syntax (`babel-loader`).
     *
     * Loaders are run in order **from bottom to top**.
     */
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'babel-loader',
      // },
      // {
      //   test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 10000,
      //   },
      // },
    ],
  },
  /**
   *
   */
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
}
