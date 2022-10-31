const path = require('path')

const pkg = require('./package.json')
const rootPath = path.resolve(__dirname, './')

const config = {
  mode: 'production',
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'min'),
    library: `${pkg.name}`,
    libraryTarget: "umd"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
}

module.exports = config;
