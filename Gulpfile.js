const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      plumber      = require('gulp-plumber'),
      nano         = require('gulp-cssnano'),
      sourcemaps   = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer'),

      scsslint     = require('gulp-scss-lint'),

      jade         = require('gulp-jade'),

      concat       = require('gulp-concat'),
      uglify       = require('gulp-uglify'),

      imagemin     = require('gulp-imagemin'),

      webstandards = require('gulp-webstandards'),
      browserSync  = require("browser-sync"),
      reload       = browserSync.reload,

      gulpif       = require('gulp-if'),
      del          = require('del'),
      path         = require('path'),
      notify       = require('gulp-notify');


const isInDevelopment = true;


const Paths = {
  "output":    'Build/',
  "framework": "Framework/",
  "jade":      "Framework/jade/",
  "sass":      "Framework/sass/",
  "js":        "Framework/js/",
  "images":    "Framework/img/",
  "fonts":     "Framework/fonts/",
  "bower":     "bower_components/"

};

const SassArray  = [
  `${Paths.sass}**/*.{sass,scss}`,
];

const JsArray    = [
  // `${Paths.bower}jquery/dist/jquery.js`,
  `${Paths.bower}jquery.easing/jquery.easing.js`,
  `${Paths.js}luna.js`,
  `${Paths.js}luna.modal.js`,
  // `${Paths.js}luna.app.js`,


];

const FontsArray = [
  `${Paths.fonts}**/*.{eot,svg,ttf,woff}`,
  `${Paths.bower}lunacon/lunacon/fonts/**/*.{eot,svg,ttf,woff}`
];

/********************************/
/* Browser Sync
/********************************/
gulp.task('browserSync', function(){
  browserSync({
    online: false,
    notify: true,
    server: './Build',
  });
});


gulp.task('sass', ()=>{
  return gulp.src(SassArray)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass({
    sourceComments: true,
    includePaths: SassArray,
  }).on('error', sass.logError))
  .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
  }))
  .pipe(gulpif(!isInDevelopment, nano()))
  .pipe(sourcemaps.write('/'))
  .pipe(gulp.dest(`${Paths.output}css`))
  .pipe(reload({stream: true}));
});


gulp.task('jade', ()=>{
  return gulp.src([`${Paths.jade}**/*.jade`, '!Framework/jade/partials/*.jade', '!Framework/jade/template/*.jade'])
  .pipe(plumber())
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest(`${Paths.output}`))
  .pipe(reload({stream: true}));
});

gulp.task('js', ()=>{
  return gulp.src(JsArray)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(`${Paths.output}js`))
    .pipe(reload({stream: true}));
});




gulp.task('img', ()=>{
  return gulp.src(`${Paths.images}**/*.{jpg,jpeg,png,gif,webp,svg}`)
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [{removeViewBox: true}]
    }))
    .pipe(gulp.dest(`${Paths.output}img`))
    .pipe(reload({stream: true}));
});

/********************************/
/* Font Lun
/********************************/
gulp.task('fonts', ['del'], ()=>{
  return gulp.src(FontsArray)
  .pipe(gulp.dest(`${Paths.output}fonts/`))
  .pipe(gulp.dest(`${Paths.fonts}/`))
});

gulp.task('del', ()=>{
  del([`${Paths.output}fonts/lunacon`, `${Paths.fonts}lunacon`]);
});



gulp.task('watch', ()=>{
  gulp.watch(`${Paths.sass}**/*.{sass,scss}`, ['sass']);
  gulp.watch(`${Paths.jade}**/*.jade`, ['jade']);
  gulp.watch(`${Paths.js}**/*.js`, ['js']);
  gulp.watch(`${Paths.images}**/*.{jpg,jpeg,png,gif,webp.svg}`, ['img']);
});

// Testing

gulp.task('webstandards', function () {
    return gulp.src(`${Paths.output}/**/*.css`)
        .pipe(webstandards());
});

gulp.task('scss-lint', function() {
  return gulp.src(`${Paths.sass}**/*.{sass,scss}`)
    .pipe(scsslint());
});





gulp.task('default', ['watch', 'sass', 'jade', 'js']);
// gulp.task('default', ['watch', 'sass', 'jade', 'js', 'img', 'browserSync']);
