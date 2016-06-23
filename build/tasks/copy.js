import gulp from 'gulp';
import * as constantes from '../constantes';

gulp.task('copia-deps-b3', () => {
  const DEPS_ORIGEM = constantes.bootstrap.v3.deps;
  const DEPS_DESTINO = constantes.bootstrap.v3.deps;

  return gulp.src(DEPS)
             .pipe(gulp.dest(DEPS_DESTINO));
});

gulp.task('copia-css-b3', () => {
  const SRC_BS_V3_ARQUIVOS_CSS = constantes.bootstrap.v3.css;
  const DEPENDENCIAS_BS_V3_PASTA_CSS = constantes.bootstrap.v3.documentacaoDepsCSS;

  return gulp.src(SRC_BS_V3_ARQUIVOS_CSS)
             .pipe(gulp.dest(DEPENDENCIAS_BS_V3_PASTA_CSS));
});

gulp.task('copia-js-b3', () => {
  const SRC_BS_V3_ARQUIVOS_JS = constantes.bootstrap.v3.srcArquivosJs;
  const DEPENDENCIAS_BS_V3_PASTA_JS = constantes.bootstrap.v3.documentacaoDepsJS;

  return gulp.src(SRC_BS_V3_ARQUIVOS_JS)
             .pipe(gulp.dest(DEPENDENCIAS_BS_V3_PASTA_JS));
});

gulp.task('copia-para-documentacao-bs-v3', [
  'copia-css-b3',
  'copia-js-b3',
  'copia-deps-b3'
]);
