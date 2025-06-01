/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  assetPrefix: isGithubPages ? '/textile-ecommerce/' : '',
  basePath: isGithubPages ? '/textile-ecommerce' : '',
};

module.exports = nextConfig;