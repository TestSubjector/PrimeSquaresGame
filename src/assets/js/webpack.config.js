var webpack = require("webpack");
module.exports = {
    context: __dirname,
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({minimize: true})
    // ]
    optimization:{
        minimize: true
    },
    mode: 'development'
};