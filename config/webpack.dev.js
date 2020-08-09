const path = require('path');
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
    host: '0.0.0.0',
    port: '4000',
    contentBase: 'dist',
  },
};
