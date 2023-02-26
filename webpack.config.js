const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    compress: true,
    hot: true,
    open: true,
    port: 3001,
    static: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/i,
        type: 'asset'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Boilerplate",
      filename: "index.html",
      template: "src/index.template.html",
    }),
    new BundleAnalyzerPlugin({analyzerMode: 'static'}),
  ],
};
