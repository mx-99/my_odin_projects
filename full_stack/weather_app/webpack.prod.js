const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",  // Set the mode to production

  // Optimization settings for JavaScript and CSS
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,  // Use multiple cores for minification
      }),
      new CssMinimizerPlugin(),  // Minify CSS
    ],
  },

  // Output settings
  output: {
    filename: "bundle.[contenthash].js",  // Use content hash for cache busting
    path: path.resolve(__dirname, "dist"),
    clean: true,  // Clean the dist folder before each build
  },

  // Module rules for processing files
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,  // Extract CSS into separate files
          "css-loader",  // Process CSS files
        ],
      },
    ],
  },

  // Plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",  // Content hashed CSS file
    }),
  ],
});
