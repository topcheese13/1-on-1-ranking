import path    from 'path'
import webpack from 'webpack'
import process from 'process'

const isProduction = (process.env.NODE_ENV === 'production');
const workingPath = path.resolve(__dirname, 'front-end');
const destPath = path.resolve(__dirname, 'public');

let config = {

    // I would recommend using different config variables
    // depending on the eviroment.
    // The package 'webpack-merge' can help with that.
    // This tenary setup is just for simplicity sake.
    entry: isProduction ? {
        main: [`${workingPath}/js/main.js`]
    } : {
        main: [`${workingPath}/js/main.js`]
    },

    output: {
        path: `${destPath}/js`,
        filename: '[name].js',
    },
    devtool: "sourcemap",
    context: path.resolve(__dirname, '../public'),

    module: {
        rules: [            {
            test: /\.(js|jsx)$/,
            exclude: [/node_modules/, /public/],
            use: {
                loader: "babel-loader"
            }
        },]
    }
}


function scripts() {
    return new Promise(resolve => webpack(config, (err, stats) => {
        if(err) console.log('Webpack', err)
        console.log(stats.toString({ /* stats options */ }))
        resolve()
    }))
}

module.exports = { config, scripts }





/*

const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
module.exports = {
    entry: {
        app: './front-end',
        styles: './front-end/scss/styles.scss'
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
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer(),
                ]
            }
        })
    ]
};



 */