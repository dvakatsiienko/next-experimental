const analyze = require('@next/bundle-analyzer');

const withBundleAnalyzer = analyze({
    enabled: process.env.ANALYZE === 'true',
    defaultSizes: 'gzip',
});

module.exports = withBundleAnalyzer({
    typescript: {
        ignoreBuildErrors: true,
    },
});
