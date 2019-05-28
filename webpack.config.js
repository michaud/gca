var path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {

    entry: [
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
        new CleanWebpackPlugin(),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/)
    ],
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
            'selectors': path.resolve(__dirname, 'src/selectors/'),
            'react-dom': '@hot-loader/react-dom'
        }
    }
};
