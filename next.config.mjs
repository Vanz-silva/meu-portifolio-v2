/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/meu-portifolio-v2",
  assetPrefix: "/meu-portifolio-v2/",
  trailingSlash: true, //  força caminhos relativos corretos
};

export default nextConfig;
