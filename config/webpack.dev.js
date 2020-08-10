const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/main.js'],
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: 'dist',
    host: '0.0.0.0',
    port: '4000',
    overlay: true,
    inline: true,
    hot: true,
    stats: {
      colors: true,
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          // HTMLWebpackPlugin does the same things as extract-loader and file-loader
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '[name].[ext]',
          //   },
          // },
          // {
          //   loader: 'extract-loader',
          //   options: {
          //     publicPath: '../',
          //   },
          // },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src'],
            },
          },
        ],
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
          },
        ],
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
            query: { inlineRequires: '/images/' },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.hbs',
      title: "Link's Journal",
    }),
  ],
};
