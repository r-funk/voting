var webpack = require('webpack');
var path = require('path');

// PostCSS Plugins
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');
var postcssNested = require('postcss-nested');
var postcssVars = require('postcss-simple-vars');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    './client/client.jsx',
  ],

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(__dirname, 'client'),
  },

  proxy: {
    '*': {
      target: 'http://localhost:8887',
      secure: false,
    }
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.jsx?$/,
        include: [/client/],
        loader: 'babel',
        query: {
          presets: ['react-hmre'],
        },
      },
    ],
    postcss: function (webpack) {
      return [
        autoprefixer,
        postcssNested,
        postcssVars,
        postcssImport({
          addDependencyTo: webpack,
          from: path.resolve(__dirname, 'client')
        }),
      ];
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
