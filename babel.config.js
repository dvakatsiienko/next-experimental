const envConfig = require('./env-config.js');

module.exports = api => {
    const env = api.env();

    api.cache.using(() => env === 'development');

    return {
        presets: ['next/babel'],
        plugins: [
            ['transform-define', envConfig],
            [
                'module-resolver',
                {
                    root: ['.'],
                    extensions: ['.tsx', '.ts', '.js', '.json', '.scss'],
                },
            ],
        ],
    };
};
