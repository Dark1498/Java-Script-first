const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
// Зависимости gulp
gulp.task('default',function(){
  //CODE eslint
  gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
      .pipe(eslint())
      .pipe(eslint.format());
  //CODE NODE
  gulp.src("es6/**/*.js")
      .pipe(babel())
      .pipe(gulp.dest("dist"));
  //CODE BROWSER
  gulp.src("public/es6/**/*.js")
      .pipe(babel())
      .pipe(gulp.dest("public/dist"));

});
