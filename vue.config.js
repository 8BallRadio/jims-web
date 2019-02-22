const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/main.scss")]
    }
  },
  pwa: {
    name: "Jim's Web",
    themeColor: "#e83158",
    msTileColor: "#e83158"
  }
};
