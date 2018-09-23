module.exports = {
    mode: 'development',

    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: `${process.cwd()}/public/scripts`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['env', { 'modules': false }],
                                ['react']
                            ]
                        }
                    }
                ],
                exclude: /node_modules/,
            }
        ]
    }
};
