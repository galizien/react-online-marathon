const gulp = require('gulp');
const concat = require("gulp-concat");
const { src, dest } = require("gulp");

function concatFileJS() {
    return src("src/**/*.js")
        .pipe(concat({ path: "result.js" }))
        .pipe(dest("output/"))
};

async function concatFileCSS(cb) {  //2 варіант з колбеком і без ретурна
    src("src/**/*.css")
        .pipe(concat({ path: "result.css" }))
        .pipe(dest("output/"));
    cb();
}

const grouped = gulp.series(concatFileJS, concatFileCSS);

exports.default = grouped;
