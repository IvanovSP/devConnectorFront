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
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    historyApiFallback: true,
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
      favicon: path.join(__dirname, '../src/assets/img/fav.png'),
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
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
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
