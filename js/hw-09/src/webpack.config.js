const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./source/app.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
  },
  stats: "errors-only",
  devServer: {
    compress: true,
    port: 9000,
    static: {
      directory: path.join(__dirname, "/dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "index.html",
      template: "source/html/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
