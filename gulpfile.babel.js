import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import runSequence from 'run-sequence';

const $ = gulpLoadPlugins();

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe($.eslint(options))
      .pipe($.eslint.format());
  };
}

gulp.task('lint', lint('app/src/**/*.js'));

gulp.task('clean', del.bind(null, ['package']));

gulp.task('package', function () {
  var manifest = require('./app/manifest.json');
  return gulp.src('./app/**')
		.pipe($.zip(manifest.name + ' - v' + manifest.version + '.zip'))
		.pipe(gulp.dest('package'));
});

gulp.task('build', (cb) => {
  runSequence(
    'lint','clean','package', cb);
});

gulp.task('default', ['clean'], cb => {
  runSequence('build', cb);
});
