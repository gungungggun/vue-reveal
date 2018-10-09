const glob = require("glob")

module.exports = {
  configureWebpack: {
    entry: {
      'new-entry': glob.sync('./src/**/*.vue')
    }
  }
}
