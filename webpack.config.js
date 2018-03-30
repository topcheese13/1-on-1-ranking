const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
module.exports = {
    entry: {
        app: './front-end',
        styles: './front-end/scss/styles.scss',
        hotreload: 'react-hot-loader/patch',
    },
    output: {
        path: __dirname + '/public',
        filename: "js/[name].js"
    },
    devtool: "sourcemap",
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize: { safe: true }
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            autoprefixer: {
                                browsers: ["ie > 10", "last 6 iOS versions", "last 4 versions"]
                            },
                            plugins: () => [
                                autoprefixer
                            ]
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {}
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /public/],
                use: {
                    loader: "babel-loader"
                }
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "/css/[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer(),
                ]
            }
        })
    ],
    devServer: {
        contentBase: __dirname + '/public',
        hot: true
    }
};
