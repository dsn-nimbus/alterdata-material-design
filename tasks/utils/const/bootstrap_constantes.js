/* bootstrap */

const CAMINHO_BASE_BOOTSTRAP = 'bootstrap';

const CAMINHO_SRC_BOOTSTRAP_3 = `${CAMINHO_BASE_BOOTSTRAP}/3.x/src/`;
const CAMINHO_DIST_BOOTSTRAP_3 = `${CAMINHO_BASE_BOOTSTRAP}/3.x/dist/`;
const CAMINHO_SRC_CSS_BOOTSTRAP_3 = `${CAMINHO_BASE_BOOTSTRAP}/3.x/src/css/`;
const CAMINHO_SRC_ARQUIVOS_CSS_BOOTSTRAP_3 = `${CAMINHO_BASE_BOOTSTRAP}/3.x/src/css/*.css`;
const CAMINHO_DOCUMENTACAO_BOOTSTRAP_3 = `${CAMINHO_BASE_BOOTSTRAP}/3.x/documentacao/`;
const CAMINHO_EXEMPLOS_BOOTSTRAP_3 = `${CAMINHO_BASE_BOOTSTRAP}/3.x/exemplos/`;
const CAMINHO_DEPENDENCIAS_CSS_BOOTSTRAP_3 = `${CAMINHO_BASE_BOOTSTRAP}/3.x/exemplos/_dependencias/material/css/`;
const CAMINHO_DEPENDENCIAS_JS_BOOTSTRAP_3 = `${CAMINHO_BASE_BOOTSTRAP}/3.x/exemplos/_dependencias/material/js/`;

const CAMINHO_SRC_BOOTSTRAP_4 = `${CAMINHO_BASE_BOOTSTRAP}/4.x/src/`;
const CAMINHO_DIST_BOOTSTRAP_4 = `${CAMINHO_BASE_BOOTSTRAP}/4.x/dist/`;
const CAMINHO_SRC_CSS_BOOTSTRAP_4 = `${CAMINHO_BASE_BOOTSTRAP}/4.x/src/css/`;
const CAMINHO_SRC_ARQUIVOS_CSS_BOOTSTRAP_4 = `${CAMINHO_BASE_BOOTSTRAP}/4.x/src/css/*.css`;
const CAMINHO_DOCUMENTACAO_BOOTSTRAP_4 = `${CAMINHO_BASE_BOOTSTRAP}/4.x/documentacao/`;
const CAMINHO_EXEMPLOS_BOOTSTRAP_4 = `${CAMINHO_BASE_BOOTSTRAP}/4.x/exemplos/`;
const CAMINHO_DEPENDENCIAS_CSS_BOOTSTRAP_4 = `${CAMINHO_BASE_BOOTSTRAP}/4.x/exemplos/_dependencias/material/css/`;
const CAMINHO_DEPENDENCIAS_JS_BOOTSTRAP_4 = `${CAMINHO_BASE_BOOTSTRAP}/4.x/exemplos/_dependencias/material/js/`;

module.exports = {
  caminhoBase: CAMINHO_BASE_BOOTSTRAP,
  v3: {
    src: CAMINHO_SRC_BOOTSTRAP_3,
    dist: CAMINHO_DIST_BOOTSTRAP_3,
    doc: CAMINHO_DOCUMENTACAO_BOOTSTRAP_3,
    exemplo: CAMINHO_EXEMPLOS_BOOTSTRAP_3,
    srcCss: CAMINHO_SRC_CSS_BOOTSTRAP_3,
    srcArquivosCss: CAMINHO_SRC_ARQUIVOS_CSS_BOOTSTRAP_3,
    depCss: CAMINHO_DEPENDENCIAS_CSS_BOOTSTRAP_3,
    depJs: CAMINHO_DEPENDENCIAS_JS_BOOTSTRAP_3
  },
  v4: {
    src: CAMINHO_SRC_BOOTSTRAP_4,
    dist: CAMINHO_DIST_BOOTSTRAP_4,
    doc: CAMINHO_DOCUMENTACAO_BOOTSTRAP_4,
    exemplo: CAMINHO_EXEMPLOS_BOOTSTRAP_4,
    srcCss: CAMINHO_SRC_CSS_BOOTSTRAP_4,
    srcArquivosCss: CAMINHO_SRC_ARQUIVOS_CSS_BOOTSTRAP_4,
    depCss: CAMINHO_DEPENDENCIAS_CSS_BOOTSTRAP_4,
    depJs: CAMINHO_DEPENDENCIAS_JS_BOOTSTRAP_4
  }
}

/* /bootstrap */