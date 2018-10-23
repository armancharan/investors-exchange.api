const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  devtool: "inline-source-map",
  entry: {
    'main': path.resolve(__dirname, 'source/index.ts')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'distribution'),
    filename: '[name].js'
  },
  plugins: [new CleanWebpackPlugin('distribution')],
  resolve: {extensions: ['.ts', '.tsx', '.js']},
  module: {
    rules: [{test: /\.tsx?$/, loader: 'ts-loader'}]
  }
}