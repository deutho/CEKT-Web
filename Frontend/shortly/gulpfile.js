var historyApiFallback = require('connect-history-api-fallback');

gulp.task('serve', function() {
  browserSync.init({
    port: 4200,
    server: {
      baseDir: "app",
      middleware: [ historyApiFallback() ]
    }
  });
});