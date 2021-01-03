const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.jsx'),
        app: path.resolve(__dirname, 'src/App.jsx')
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            title: 'Juan App',
            favicon: path.resolve(__dirname, 'public/Logo-Emprenti-pequeño.jpg'),
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}