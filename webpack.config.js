const path = require("path");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const entries = fs
  .readdirSync(path.resolve(__dirname, "src"))
  .filter((dir) => fs.statSync(path.resolve("src", dir)).isDirectory())
  .reduce((acc, dir) => ({ ...acc, [dir]: `./src/${dir}/${dir}` }), {});

const distDir = path.join(__dirname, "dist");

module.exports = {
  entry: entries,
  output: {
    filename: "[name].js",
    publicPath: "/dist/",
  },
  devServer: {
    server: {
      type: "https",
    },
    port: 3000,
    static: {
      directory: distDir,
    }
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "**/*.html", 
          context: "src",
          to: ({ absoluteFilename }) => path.basename(absoluteFilename),
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};