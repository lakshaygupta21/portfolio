import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're deploying to a sub-path, e.g., https://<username>.github.io/<repo-name>/
  // basePath: '/<repo-name>',
};

export default nextConfig;
