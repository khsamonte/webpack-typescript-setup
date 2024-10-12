/**
 * This file is for the development environment.
 *
 * This config enables:
 * 1. Source Maps: For easier debugging in the browser.
 * 2. Hot Module Replacement: To enable real-time updates without full page
 * reloads.
 * 3. Development Mode: This uses Webpack's built-in optimizations for dev't.
 */

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map", // Enable source maps for easier debugging
  devServer: {
    static: "./dist",
    hot: true, // Enable hmr
    open: true, // Automatically open the browser
    port: 3000, // Any port works
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
});
