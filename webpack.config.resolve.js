const path = require('path')

/**
 * Determine the array of extensions that should be used to resolve modules.
 */
module.exports = {
  alias: {
    Classes: path.resolve(__dirname, 'src/classes/'),
  },
}
