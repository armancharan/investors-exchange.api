const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    'investors-exchange.api': './source/index.ts',
    'investors-exchange.api.min': './source/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'distribution'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'MyLib',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({sourceMap: true, include: /\.min\.js$/})
    ]
  },
  module: {
    rules: [
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/, query: {declaration: false}}
    ]
  }
}