var path = require('path');
var express = require('express');
var webpack = require('webpack');
var httpProxy = require('http-proxy');
var config = require('./webpack.config.dev.js');

var app = express();
var appProxy = httpProxy.createProxyServer();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// Proxy api requests
 app.use("*", function(req, res) {
   req.url = req.baseUrl;
   appProxy.web(req, res, {
     target: {
       port: 8887,
       host: "localhost"
     }
   });
 });


app.listen(8877, 'localhost', function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.info('Dev server listening on port ' + 8877);
})
