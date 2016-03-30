// import modules
var path = require('path');

/**
 * Configuration of webpack for development
 * @module webpack.config.dev
 * @type {{entry: string, output: {filename: string}, module: {loaders: *[]}, resolve: {extensions: string[]}}}
 */
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry  : './assets/js/main.js',
  output : {
    path      : path.resolve(__dirname, 'dest'),
    publicPath: '/assets/',
    filename  : 'js/bundle.js'
  },
  module : {
    loaders: [
      {
        test  : /\.js$/,
        loader: 'babel-loader',
        query : {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
