var path = require('path');

var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');

module.exports = function(config, env) {
    var config = genDefaultConfig(config, env);

    config.module.loaders.push({
        test: /\.less$/,
        include:[path.resolve(__dirname, '../src')],
        loaders: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader',
            'less-loader'
        ]
    });

    return config;
}
