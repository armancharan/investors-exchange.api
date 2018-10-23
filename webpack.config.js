const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: './source/index.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'distribution'),
    filename: '[name].js'
  },
  plugins: [new CleanWebpackPlugin('distribution')],
  resolve: {extensions: ['.ts', '.tsx', '.js']},
  module: {
    rules: [{test: /\.tsx?$/, loader: 'ts-loader', exclude: [/node_modules/, /__tests__/]}]
  }
}