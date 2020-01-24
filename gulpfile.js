const gulp = require('gulp');
const babel = require('gulp-babel');
// Зависимости gulp
gulp.task('default',function(){
  //CODE NODE

  gulp.src("es6/**/*.js")
      .pipe(babel())
      .pipe(gulp.dest("dist"));
  //CODE BROWSER
  gulp.src("public/es6/**/*.js")
      .pipe(babel())
      .pipe(gulp.dest("public/dist"));

});
