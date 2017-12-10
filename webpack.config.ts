import * as path from 'path';
var webpack = require('webpack');

export default {
  entry: [
    path.resolve(__dirname, 'src/client/index')
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(process.env.SERVER_HOST + ':' + process.env.SERVER_PORT + '/')
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/client'),
    publicPath: '/'
  }
};