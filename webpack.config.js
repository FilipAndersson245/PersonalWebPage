const path = require("path");
const webpack = require("webpack");
const { CheckerPlugin } = require("awesome-typescript-loader");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const config = {
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

  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,

    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        reactAndMaterial: {
          test: /[\\/]node_modules[\\/](react|react-dom|@material-ui)[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  plugins: [new CheckerPlugin(), new webpack.NoEmitOnErrorsPlugin()]
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.optimization.minimize = true;
    config.devtool = "source-map";
    config.plugins.push(new BundleAnalyzerPlugin());
  } else if (argv.mode === "development") {
    config.devtool = "eval";
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  return config;
};
