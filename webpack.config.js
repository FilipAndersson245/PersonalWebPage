const path = require("path");
const webpack = require("webpack");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = {
  entry: "./src/index.tsx",
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [path.resolve(__dirname, "node_modules"), /\.(tests?)\.tsx?$/],
        loader: "awesome-typescript-loader"
      }
    ]
  },
  resolve: {
    modules: [__dirname, path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    host: "0.0.0.0",
    port: 3000,
    stats: {
      assets: false,
      hash: false,
      chunks: false,
      errors: true,
      errorDetails: true
    },
    overlay: true
  },
  devtool: "source-map",
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  },

  plugins: [
    new CheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
