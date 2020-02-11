const path = require("path");
const portFinderSync = require("portfinder-sync");
const HWP = require("html-webpack-plugin");
module.exports = ({ CLIENT_PORT = 9000, CLIENT_HOST = "0.0.0.0" }) => {
  let port = CLIENT_PORT;
  let portAvailable = portFinderSync.getPort(port);
  if (portAvailable !== CLIENT_PORT) {
    port += 2;
    console.log(`${CLIENT_PORT} not available, using ${port}`);
  }
  return {
    entry: "./src/client/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index_bundle.js",
      publicPath: "/"
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port,
      host: CLIENT_HOST,
      historyApiFallback: true
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
      new HWP({ template: path.join(__dirname, "src/client/index.html") })
    ]
  };
};
