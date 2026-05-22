/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure the base path is correct for GitHub Pages if it's not a custom domain
  // basePath: '/miniature-parakeet', 
};

export default nextConfig;
