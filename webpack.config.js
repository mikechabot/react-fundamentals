module.exports = {
    entry: './src/bootstrap.jsx',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true, // Reflect URL changes in  the browser bar
        port: 3070
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};