//we can defined our own variables to use in the application
// here we do the magic
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        hot:true,
        //move OPEN to here from package json as now we have devServer here
        open: true,
    },
    devtool: 'cheap-module-source-map',
    //here is magec
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Volodymyr'),
        }),
        new ReactRefreshWebpackPlugin(),
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