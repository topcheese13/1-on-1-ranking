import process from 'process';
const webpack = require('webpack');
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");

const isProduction = (process.env.NODE_ENV === 'production');
const workingPath = './front-end';
const destPath = './public';

let config = {

    entry: isProduction ? {
        main: [`${workingPath}/js/main.js`]
    } : {
        main: [`${workingPath}/js/main.js`, 'webpack-hot-middleware/client']
    },

    output: {
        path: `${destPath}/js`,
        filename: '[name].js',
    },
    devtool: "sourcemap",
    context: `${workingPath}`,

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /public/],
                use: {
                    loader: "babel-loader"
                }
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

/**
 * Run the hot javascript build process.
 */
function runHot() {
    try {
        const entries = config.entry;
        const compiler = webpack(config);
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
            print("Dev server listening on port 3030.");
        });

    } catch (err) {
        if (options.verbose) {
            throw err;
        } else {
            printError(err);
        }
    }
}

function compileScripts() {
    return new Promise(resolve => webpack(config, (err, stats) => {
        if(err) console.log('Webpack', err)
        console.log(stats.toString({ /* stats options */ }))
        resolve()
    }))
}

module.exports = { config, compileScripts, runHot }
