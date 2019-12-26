//next.config.js
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');

module.exports = withImages(withCSS());


/*
module.exports = withTypescript(
    withImages(withCSS({
        webpack(config, options) {
            // Further custom configuration here
            config.resolve = {
                // custom stuff
                ...config.resolve // spread ehre
            };
            return config;
        }
    }))
);*/

/* next.config.js
const webpack = require('webpack')
const path = require('path')
const withCSS = require('@zeit/next-css');
const withImages = require('next-images')

module.exports = withImages(
    withCSS({
        distDir: 'build',
        webpack(config) {
            // alias the ./src folder to ~
            config.resolve.alias = {
                '~': path.resolve(__dirname, './src')
            }
            return config
        }
    })
) */