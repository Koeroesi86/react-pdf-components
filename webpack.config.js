const path = require("path");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

const isDev = process.argv.includes("--watch");
const mode = isDev ? "development" : "production";

module.exports = {
  mode,
  entry: {
    index: path.resolve(__dirname, "./src/index.tsx"),
  },
  target: "node",
  devtool: false,
  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(__dirname, ".cache/webpack/package"),
  },
  watchOptions: {
    poll: 1000,
  },
  output: {
    path: path.resolve(__dirname, "./dist/package"),
    filename: "[name].js",
    library: {
      type: "commonjs2",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  externals: ["react", "@react-pdf/renderer"],
};
