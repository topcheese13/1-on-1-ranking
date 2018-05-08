const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const baseConfig = require("./webpack.config.base");

const devConfig = webpackMerge(baseConfig, {
    devtool: "cheap-module-eval-source-map",
    mode: "development",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});

devConfig.entry.main.unshift('webpack-hot-middleware/client');

module.exports = devConfig;
