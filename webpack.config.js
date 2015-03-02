module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'jshint-loader', exclude: /node_modules/}
    ],
    loaders: [
      { test: /\.css$/, loader: 'style!css'}
    ]
  }
};
