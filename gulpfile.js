let gulpS = require("gulp");
let rename = require("gulp-rename"),
  autoprefixer = require("gulp-autoprefixer"),
  include = require('gulp-file-include'),
  webpHtml = require('gulp-webp-html'),
  webpCss = require('gulp-webp-css')
  webPa = require('gulp-webp');
const { src, task } = require("gulp");





function inclFile(done) {
   return gulpS.src('src/**/*.html')
    .pipe(include({
        prefix: '@@',
        basepath: '@file'
    }))
    
    .pipe(gulpS.dest('build/'))
}

function autoPrefix (done) {
    return gulpS.src('src/**/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(webpCss())
        .pipe(gulpS.dest('build/'));
}


function webp (done){
    return gulpS.src('src/img/**')
                .pipe(gulpS.dest('build/img/'))
                .pipe(src('build/img/**'))
                .pipe(webPa({
                    quality: 70
                }))
                .pipe(gulpS.dest('build/img/'))

}

function just(done){
    return gulpS.src('src/scripts/*.js')
    .pipe(gulpS.dest('build/scripts/'))
}



gulpS.task( inclFile);
gulpS.task( autoPrefix);
gulpS.task( webp);
gulpS.task( just);


