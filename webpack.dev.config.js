var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        stats: 'errors-only',
    },

    entry: ['babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
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
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new ExtractTextPlugin('style.css')
    ],
    module: {
        rules: [{
            test: /\.js(x?)$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.json$/,
            use: "file-loader"
        },
        {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader']
        }]
    },
    resolve: {
        extensions: ['.scss', '.js', '.jsx', '.json'],
        modules: [
            'node_modules',
            path.resolve(__dirname, './node_modules/foundation-sites/scss'),
            path.resolve(__dirname, '/scss'),
            
        ]
    }
};
