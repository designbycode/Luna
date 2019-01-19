let mix = require('laravel-mix')
let Path = require('path');
let ImageminPlugin     = require('imagemin-webpack-plugin').default;
let CopyWebpackPlugin  = require('copy-webpack-plugin');
let imageminMozjpeg    = require('imagemin-mozjpeg');
let jade = require('laravel-mix-blade-jade')

mix
    .sass('./Framework/sass/style.sass', './dist/css/style.css')
    .js('./Framework/js/lunaapp.js', './dist/js/app.js')
    .jade('./Framework/jade', './dist')
