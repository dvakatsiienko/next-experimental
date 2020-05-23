const { BUILD_ENV } = process.env;

module.exports = {
    __ENV__:   BUILD_ENV,
    __DEV__:   BUILD_ENV === 'development',
    __STAGE__: BUILD_ENV === 'stage',
    __PROD__:  BUILD_ENV === 'production',
    __TEST__:  BUILD_ENV === 'test',
};
