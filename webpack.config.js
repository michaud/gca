var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
var HtmlWebPackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {

    entry: ['babel-polyfill', 'react-hot-loader/patch',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'build/js'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index-template.html',
            hash: false,
            title: 'NL-ix',
            filename: './index.html'
        }),
        new CleanWebpackPlugin(['build']),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/)
    ],
    module: {
        rules: [{
            test: /\.js(x?)$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.json$/,
            use: 'file-loader'
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
        ]
    },
    devServer: {
        port: 3000,
        publicPath: '/',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.scss', '.js', '.jsx', '.json'],
        modules: [
            'node_modules',
            path.resolve(__dirname, './node_modules'),
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
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
