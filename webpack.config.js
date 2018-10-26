//entry point - where does application kick off? -> output

const path = require('path');

// way to expose object to another file
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),   //absolute path
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

//loader