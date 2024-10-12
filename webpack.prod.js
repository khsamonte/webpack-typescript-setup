/**
 * This file is for the production environment.
 *
 * This config enables:
 * 1. Minification: The TerserPlugin reduces the size of the JavaScript bundles.
 * 2. Production Mode: This optimizes for performance (e.g., minifies code,
 * disables source maps, etc.).
 */

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
});
