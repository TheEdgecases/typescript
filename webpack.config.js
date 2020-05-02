const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: './client/index.tsx',

  watch: true,

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/build/',
    proxy: { '/' : 'http://localhost:3000' }
    // contentBase: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        }
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }, 
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'source-map-loader',
      },
    ],
  },
}