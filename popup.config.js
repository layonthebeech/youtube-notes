// In webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname + '/src/popup/index.html'),
  filename: 'index.html',
  inject: 'body',
});
module.exports = {
  entry: [
    './src/popup/index.js',
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname + '/dist/popup'),
  },
  plugins: [HTMLWebpackPluginConfig],
};
