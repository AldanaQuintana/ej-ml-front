const path = require('path');
const webpack = require('webpack');

// env
const buildDirectory = './dist/';


// ------ working for npm test---------
if(process.env.NODE_ENV === 'test'){
  module.exports = {
    entry: './src/app.js',
    devServer: {
      hot: true,
      inline: true,
      port: 3000,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: path.resolve(buildDirectory),
      filename: 'app.js',
      publicPath: 'http://localhost:3000/dist',
    },
    externals: {
      'cheerio': 'window',
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      }],
    },
    plugins: [],
  };
}else{
  module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
      devServer: {
      hot: true,
      inline: true,
      port: 8080,
      historyApiFallback: true
    },
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
  };
}
