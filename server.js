/**
 * Created by yongyuehuang on 2017/8/22.
 */
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')
var path = require('path')
const webpackServerConfig = require('./webpackServerConfig')
var proxy = require('http-proxy-middleware')

new WebpackDevServer(webpack(config), {
    hot: true,
    compress: true,
    historyApiFallback: true,
    publicPath: '/build/',
    watchOptions: {
        ignored: /node_modules/,
    },
    stats: {
        modules: false,
        chunks: false
    },
    setup(app) {
        app.use('/majax/*', proxy({
            target: 'https://m.qidian.com',
            secure: false
        }))
        //app.use('/', function(req, res) {
        //    res.sendFile(path.join(__dirname,'index.html'))
        //})
    }
}).listen(webpackServerConfig.port, webpackServerConfig.host, function (err, result) {
    if (err) {
        return console.log(err);
    }
    
    console.log(`Listening at http://${webpackServerConfig.host}:${webpackServerConfig.port}/`);
});