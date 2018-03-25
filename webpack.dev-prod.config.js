var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  devServer: {
    stats: 'errors-only',
  },

  entry: ['babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot-loader/dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '/js'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ],
  module: {
    rules: [{
      test: /\.js(x?)$/,
      use: ['react-hot-loader', 'babel-loader'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.json$/,
      use:"file-loader"
    },
    {
            test: /(\.scss|\.css)$/,
            include: [path.resolve(__dirname, "./scss")],
            use: ['style-loader','css-loader','postcss-loader','sass-loader']
    }]
  },
  resolve: {
    extensions: ['.scss', '.js', '.jsx', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ],
    alias: {
      'scss': path.resolve(__dirname, 'src/scss/'),
      'components': path.resolve(__dirname, 'src/components/'),
      'actions': path.resolve(__dirname, 'src/actions/'),
      'reducers': path.resolve(__dirname, 'src/reducers/'),
      'selectors': path.resolve(__dirname, 'src/selectors/')
    }
  }
};
