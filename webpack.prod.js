const path = require("path");
const HWP = require("html-webpack-plugin");

const entry = {
  index: "./src/client/index.js"
};

const output = {
  path: path.resolve(__dirname, "dist"),
  filename: "[name]bundle.js"
};

const optimization = {
  splitChunks: {
    chunks: "all"
  }
};

module.exports = {
  entry,
  output,
  optimization,
  performance: {
    hints: "warning",
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, "src/client/common")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HWP({
      template: "src/client/index.html",
      filename: "index.html",
      hash: true
    })
  ]
};
