const path = require('path');

var HtmlWebpackPlugin = require("html-webpack-plugin");

console.log("building a project is starting")

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: ["style-loader", "css-loader", "postcss-loader"]}
        ]
    },
    plugins: [
                new HtmlWebpackPlugin({
                    template: path.resolve(__dirname, "src", "index.html")
                })
            ]
};