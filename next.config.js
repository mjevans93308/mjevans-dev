const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const {
    ON_GITHUB_PAGES,
} = process.env;

const basePath = ON_GITHUB_PAGES ? '/mjevans-dev' : '';
const assetPrefix = ON_GITHUB_PAGES ? '/mjevans-dev/' : '';

const env = {
    CANONICAL_URL: 'https://mjevans.dev',
};

module.exports = withPlugins([
    [optimizedImages, {
        mozjpeg: {
            quality: 80,
        },
        pngquant: {
            speed: 3,
            strip: true,
            verbose: true,
        },
        imagesPublicPath: '/mjevans-dev/_next/static/images/',
    }],
    {
        assetPrefix: assetPrefix,
        basePath: basePath,
        env,
    },
]);