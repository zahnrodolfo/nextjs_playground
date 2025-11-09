import type { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGithubActions && repo && !repo.endsWith('.github.io')
    ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` }
    : {}),
};

export default nextConfig;
