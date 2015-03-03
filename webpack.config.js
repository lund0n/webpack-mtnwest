var webpack = require('webpack');
var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('init.js');
module.exports = {
  entry: {
    'grocery-app': './app/grocery-entry.js',
    'todo-app': './app/todo-entry.js'
  },
  output: {
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  },
  externals: [
    'moment'
  ],
  plugins: [ commonsChunkPlugin ]
};
