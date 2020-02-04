const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {
            drop_console: true,
          },
          mangle: { // Note `mangle.properties` is `false` by default.
            toplevel: true,
            // properties: false,
            // properties: {
            //   regex: /(__[a-zA-Z]+)/,
            // },
            // properties: {
            //   regex: /__/g,
            // },
          },
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
  },
  module: {
    // Loaders go here!
    rules: [
    ],
  },
  plugins: [
  ],
})
