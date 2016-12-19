const webpack = require("webpack");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./bin",
        filename: "app.bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
};