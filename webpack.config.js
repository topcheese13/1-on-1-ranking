const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
    allChunks: false
});

module.exports = {
    entry: [
        './front-end'
    ],
    output: {
        path: __dirname + '/public',
        filename: "js/app.js",
        publicPath: "/",
    },
    devtool: "sourcemap",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        'css-loader'
                    ],
                    fallback: 'style-loader',
                })
            }
        ],
    },
    plugins: [
        extractSass
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};


