const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Already installed plugin
const webpack = require("webpack"); // We'll use this for the HMR plugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.ts",
    admin: "./src/admin.ts",
  },
  output: {
    filename: "[name].bundle.js", // [name] will use the entry point name ('main' or 'admin')
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
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: "production", // Development mode for HMR
  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot: true, // Enable Hot Module Replacement
    open: true, // Automatically open the browser
    port: 3000, // You can specify any port
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // HTML template
      chunks: ["main"], // Only load 'main' bundle for this HTML
    }),
    new HtmlWebpackPlugin({
      filename: "admin.html", // Separate admin page
      template: "./src/admin.html",
      chunks: ["admin"], // Only load 'admin' bundle for this HTML
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"), // Set global variable
      MY_CUSTOM_VARIABLE: JSON.stringify("Hello from Webpack!"), // Custom variable
    }),
    new webpack.HotModuleReplacementPlugin(), // HMR plugin
  ],
};
