const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Entry point for your application
  entry: {
    app: "./src/index.js",
  },
  // Resolve extensions
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  // Output settings
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  // Devtool for source maps (good for debugging)
  devtool: "source-map",
};
