//we do the same here
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    devtool: 'source-map',
        plugins: [
        // new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('James'),
        }),
        new BundleAnalyzerPlugin(),
    ],
}