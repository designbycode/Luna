let mix                = require('laravel-mix')
let Path               = require('path')
let ImageminPlugin     = require('imagemin-webpack-plugin').default
let CopyWebpackPlugin  = require('copy-webpack-plugin')
let imageminMozjpeg    = require('imagemin-mozjpeg')



mix
    .webpackConfig({
        resolve: {
            alias: {

            }
        },
        plugins: [
            new CopyWebpackPlugin([{
                    from: 'Framework/img', // FROM
                    to: './dist/img/', // TO
            }]),
            new CopyWebpackPlugin([{
                from: 'Framework/img', // FROM
                to: 'Build/img/', // TO
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
    .sass('./Framework/sass/style.sass', './Build/css/dev-style.css')
    .js('./Framework/js/lunaapp.js', './dist/js/app.js')



