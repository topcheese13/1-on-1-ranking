const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const baseConfig = require("./webpack.config.base");

module.exports = webpackMerge(baseConfig, {
    devtool: "sourcemap",
    mode: "production",
    optimization: {
        noEmitOnErrors: true,
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]
});
