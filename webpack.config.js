var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: ['babel-polyfill',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'build/js'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new CopyWebpackPlugin([{ from: 'index.html', to: path.join(__dirname, 'build/index.html') }],
            { copyUnmodified: true })
    ],
    module: {
        rules: [{
            test: /\.js(x?)$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.json$/,
            use: "file-loader"
        },
        {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader']
            }
        ]
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
