import express from 'express';
import path from 'path';
const webpack = require('webpack');

const config = require('../../config/webpack.dev.js');

const server = express();
const compiler = webpack(config);

const staticMiddleware = express.static('dist');

const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
server.use(staticMiddleware);

const PORT = 4001;
const HOST = '0.0.0.0';

server.listen(PORT, HOST, () => {
  console.log(`Server is listening on ${HOST}:${PORT}`);
});
