const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Already installed plugin
const webpack = require("webpack"); // We'll use this for the HMR plugin

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // This ensures Webpack serves the files from the root URL
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development", // Development mode for HMR
  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot: true, // Enable Hot Module Replacement
    open: true, // Automatically open the browser
    port: 3000, // You can specify any port
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // HTML template
    }),
    new webpack.HotModuleReplacementPlugin(), // HMR plugin
  ],
};
