const path = require('path')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const pkg = require('./package.json')
const rootPath = path.resolve(__dirname, './')

const config = {
  mode: 'production',
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(rootPath, 'dist'),
    library: `${pkg.name}`,
    libraryTarget: "umd"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname + '/src/haUtil'),
        to: './',
      },
      {
        from: path.resolve(__dirname + '/assets/*'),
        to: './',
      },
      {
        from: path.resolve(__dirname + '/LICENSE'),
        to: './',
      },
      {
        from: path.resolve(__dirname + '/package.json'),
        to: './',
      },
      {
        from: path.resolve(__dirname + '/README.md'),
        to: './',
      },
    ]),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
}

module.exports = config;
