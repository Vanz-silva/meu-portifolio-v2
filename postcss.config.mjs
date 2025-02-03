/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss7-compat": {}, // Usando a versão compatível com PostCSS 7
    autoprefixer: {}, // Se necessário, também mantenha o autoprefixer
  },
};

export default config;
