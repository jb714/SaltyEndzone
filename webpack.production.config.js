var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'index.js');

var config = {

  // We change to normal source mapping
  devtool: 'source-map',
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  
  plugins: [
  new webpack.DefinePlugin({
      // A common mistake is not stringifying the "production" string.
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
  new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery"
     })
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?presets[]=react,presets[]=es2015',
      exclude: [nodeModulesPath]
    },{
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    },
    { test: require.resolve("jquery"), loader: "imports?jQuery=jquery" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }]
  }
};

module.exports = config;