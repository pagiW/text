const path = require('path');
const { DllPlugin } = require('webpack');

module.exports = {
    entry: {
        modules: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-redux',
            'redux'
        ]
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        new DllPlugin({
            name: '[name]',
            path: path.join(__dirname, '[name]-manifest.json')
        })
    ]
}