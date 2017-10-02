var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var argv = require('minimist')(process.argv.slice(2));
var configDev = require('./webpack.dev.config');
var configDevProd = require('./webpack.dev-prod.config');

var config = configDev;

if (argv.env === 'prod') {
    config = configDevProd;
}


new WebpackDevServer(webpack(config), {
    //publicPath: path to your bundle
    publicPath: '/js',
    contentBase: [path.join(__dirname),
    path.join(__dirname, '/src')],
    stats: {
        colors: true,
        hash: false,
        version: false,
        timings: true,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: false,
        publicPath: false
    },
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
});
