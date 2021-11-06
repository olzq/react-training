const { merge } = require("webpack-merge");
const common = require("./webpack.common.conf.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 4200,
    historyApiFallback: true,
    hot: true,
    compress: false,
  },
  devtool: "source-map",
});
