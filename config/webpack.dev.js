/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    open: 'Google Chrome',
    contentBase: path.join(__dirname, '../dist'),
    https: true,
    host: 'localhost',
    port: 3000,
  },
  entry: {
    main: path.join(__dirname, '../src/index.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'local',
    }),
    new HtmlWebpackPlugin({
      title: 'Dev Connector',
      template: path.join(__dirname, '../src/index.html'),
      cache: false,
      favicon: path.join(__dirname, '../src/assets/fav.png'),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.join(__dirname, './babel.config.js'),
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        include: /node_modules/,
        use: 'null-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '..', 'src'),
    },
    extensions: ['.js', '.json'],
  },
  node: {
    fs: 'empty',
  },
};
