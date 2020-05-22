import webpack from 'webpack-stream';
import gulp from 'gulp';

import pug from 'gulp-pug';
import gulpPretty from 'gulp-pretty-html';

import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import csso from 'gulp-csso';
import autoprefixer from 'autoprefixer';
import normalize from 'node-normalize-scss';

import del from 'del';
import rename from 'gulp-rename';

import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import svgstore from 'gulp-svgstore';

import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import webpackConfig from './webpack.config';

const server = browserSync.create();

gulp.task(`css`, () => gulp.src(`source/sass/style.sass`)
  .pipe(plumber())
  .pipe(sass({
    includePaths: normalize.includePaths,
  }))
  .pipe(postcss([
    autoprefixer(),
  ]))
  .pipe(csso())
  .pipe(gulp.dest(`build/css`))
  .pipe(server.stream()));

gulp.task(`pug`, () => gulp.src(`source/pug/pages/*.pug`)
  .pipe(plumber())
  .pipe(pug())
  .pipe(gulpPretty())
  .pipe(gulp.dest(`build`)));

gulp.task(`sprite`, () => gulp.src(`source/img/sprite/*.svg`)
  .pipe(svgstore({
    inlineSvg: true,
  }))
  .pipe(rename(`sprite.svg`))
  .pipe(gulp.dest(`build/img`)));

gulp.task(`js`, () => gulp.src(`source/js/index.js`)
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(`build/js`)));

gulp.task(`clean`, () => del(`build`));

gulp.task(`copy`, () => gulp.src([
  `source/fonts/**/*.{woff,woff2}`,
  `source/img/**`,
  `source/js/lib/*`,
], {
  base: `source`,
})
  .pipe(gulp.dest(`build`)));

gulp.task(`server`, () => {
  server.init({
    server: `build/`,
  });

  gulp.watch(`source/**/*.pug`, gulp.series(`pug`, `refresh`));
  gulp.watch(`source/img/**/*`, gulp.series(`copy`, `sprite`, `pug`, `refresh`));
  gulp.watch(`source/js/**/*`, gulp.series(`js`, `refresh`));
  gulp.watch(`source/sass/**/*.{scss,sass}`, gulp.series(`css`));
});

gulp.task(`refresh`, (done) => {
  server.reload();
  done();
});

gulp.task(`build`, gulp.series(
    `clean`,
    gulp.parallel(
        `copy`,
        `css`,
    ),
    gulp.parallel(
        `sprite`,
    ),
    gulp.parallel(
        `pug`,
        `js`,
    ),
));

gulp.task(`start`, gulp.series(
    `build`,
    `server`,
));

// Таски для отпимизации изображений, использование через - npx gulp webp *taskname*
gulp.task(`webp`, () => gulp.src(`build/img/**/*.jpg`)
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest(`build/img`)));

gulp.task(`images`, () => gulp.src(`build/img/**/*.{png,jpg,svg}`)
  .pipe(imagemin([
    imageminPngquant({quality: [0.6, 0.8]}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: false},
      ],
    }),
  ]))
  .pipe(gulp.dest(`build/img`)));

gulp.task(`svg`, () => gulp.src(`build/img/**/*.svg`)
  .pipe(imagemin([
    imagemin.svgo({
      plugins: [
        {removeViewBox: false},
      ],
    }),
  ]))
  .pipe(gulp.dest(`build/img`)));
