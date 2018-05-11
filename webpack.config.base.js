const webpack = require('webpack');
const path = require("path");

const isProduction = (process.env.NODE_ENV === 'production');
const workingPath = path.resolve(__dirname, './front-end');
const destPath = path.resolve(__dirname, './public');

module.exports = {
    cache: true,
    entry: {
        main: [
            `${workingPath}/js/main.jsx`
        ],
    },
    output: {
        path: `${destPath}/js`,
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: [`${workingPath}`],
            exclude: [/node_modules/, /public/],
            use: {
                loader: "babel-loader"
            }
        }],
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};
