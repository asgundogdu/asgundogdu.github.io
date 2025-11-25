/* eslint-env node */

// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12 has multiple TS loaders, and we need to update all of them.
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach(rule => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  svgo: {
    multipass: true,
    plugins: ['removeDimensions'],
  },
  assetPrefix: isGithubPages ? './' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  strictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
