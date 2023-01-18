//we can defined our own variables to use in the application
// here we do the magic
const webpack = require('webpack')
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    //here is magec
    plugins: [
        // new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Volodymyr'),
        }),
    ],
}

// module.exports = {
//   mode: 'development',
//   devtool: 'cheap-module-source-map',
//   devServer: {
//     hot: true,
//     open: true,
//   },

// }