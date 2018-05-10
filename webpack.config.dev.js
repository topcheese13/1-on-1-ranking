const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const baseConfig = require("./webpack.config.base");

const devConfig = webpackMerge(baseConfig, {
    devtool: "cheap-module-eval-source-map",
    mode: "development",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        publicPath: "http://127.0.0.1:3030/",
    }
});

devConfig.entry.main.unshift('webpack-hot-middleware/client?dynamicPublicPath=true&path=__webpack_hmr');

module.exports = devConfig;
