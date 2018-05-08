const webpack = require('webpack');
const express = require('express');
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");
const devConfig = require("./webpack.config.dev");

/**
 * Run the hot javascript build process.
 */
function runHot() {
    try {
        const compiler = webpack(devConfig);
        const app = express();

        // Allow CORS
        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        app.use(devMiddleware(compiler, {
            publicPath: "http://127.0.0.1:3030/",
        }));

        app.use(hotMiddleware(compiler));

        app.listen(3030, () => {
            console.log("Dev server listening on port 3030.");
        });

    } catch (err) {
        console.error(err);
    }
}

runHot();
