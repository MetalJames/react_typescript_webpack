//we do the same here
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
        plugins: [
        // new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('James'),
        }),
    ],
}