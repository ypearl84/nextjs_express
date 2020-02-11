const webpack = require('webpack')
const path = require("path")

module.exports = {
    mode: 'development',
    entry: [
                "./pages/index.js",
        ],
    output: {
        path: __dirname,
        publicPath: '/js/',
        filename: `[name].js`,
    },
    /*output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },*/
    module:{
        rules:[
            {
                test: /\.data$/i,
                use: 'raw-loader',
            },
            {
                test: /\.(jsx|js)?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }],
                exclude: /(node_modules|bower_components)/,

            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: `localhost`
    },

}
