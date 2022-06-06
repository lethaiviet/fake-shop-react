//craco.config.js
const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@styled': path.resolve(__dirname, 'src/styled/'),
        },
    },
};