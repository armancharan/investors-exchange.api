const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    'index': './source/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'distribution'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'investors-exchange.api',
    umdNamedDefine: true
  },
  plugins: [new CleanWebpackPlugin('distribution')],
  resolve: {extensions: ['.ts', '.tsx', '.js']},
  module: {
    rules: [{test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/, query: {declaration: true}}]
  }
}