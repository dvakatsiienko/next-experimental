const envConfig = require('./env-config.js');

module.exports = api => {
    const env = api.env();

    api.cache.using(() => env === 'development');

    return {
        presets: ['next/babel'],
        plugins: [
            ['styled-components', { ssr: true }],
            ['transform-define', envConfig], // TODO: check that out
            [
                'module-resolver', // TODO: check that out
                {
                    root: ['.'],
                    extensions: ['.tsx', '.ts', '.js', '.json', '.scss'],
                },
            ],
            ['graphql-tag'], // TODO: check that out
        ],
    };
};
