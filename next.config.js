/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.thefishcollection.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
