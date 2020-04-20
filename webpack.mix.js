let mix                = require('laravel-mix')
let Path               = require('path')
let ImageminPlugin     = require('imagemin-webpack-plugin').default
let CopyWebpackPlugin  = require('copy-webpack-plugin')
let imageminMozjpeg    = require('imagemin-mozjpeg')

mix
    .setPublicPath('Build')
    .webpackConfig({
        resolve: {
            alias: {

            }
        },
        plugins: [

            new CopyWebpackPlugin([{
                from: 'Framework/img', // FROM
                to: '/img/', // TO
            }]),
            new ImageminPlugin({
                test: /\.(jpe?g|png|gif|svg)$/i,
                pngquant: {
                    quality: '65-80'
                },
                plugins: [
                    imageminMozjpeg({
                        quality: 65,
                        //Set the maximum memory to use in kbytes
                        // maxmemory: 1000 * 512
                    })
                ]
            })
        ]
    })
    // .sass('./Framework/sass/style.sass', './dist/css/style.css')
    .js('./Build/assets/js/app.js', './js/app.js')
    // .js('./Framework/js/app.js', './js/app.js')
    .sass('./Build/assets/sass/app.sass', './css/app.css')
    // .sass('./Framework/sass/style.sass', '../Framework/sass/style.css')
    .options({
        processCssUrls: false
    });



