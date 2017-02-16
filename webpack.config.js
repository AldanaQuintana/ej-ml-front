const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    }
  };
}else{
  module.exports = {
    entry: {
      'bundle.js': './src/main.js',
      'bundle.css': './src/styles/main.scss'
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: '[name]',
      publicPath: '/'
    },
      devServer: {
      hot: true,
      inline: true,
      port: 8080,
      historyApiFallback: true,
      headers: { "Access-Control-Allow-Origin": "*" }
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
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'], publicPath: '/' })
        },
        // {
        //   test: /\.(eot|svg|ttf|woff|woff2)(2)?(\?[a-z0-9]+)?$/,
        //   loader: 'file?name=public/fonts/[name].[ext]'
        // },
        { test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000&name=/src/styles/fonts/[name].[ext]' },
        { test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/, loader: 'file?name=/src/styles/fonts/[name].[ext]' }
      ],
    },
    plugins: [
      new ExtractTextPlugin('bundle.css')
    ]
  };
}
