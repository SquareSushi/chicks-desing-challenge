/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack" , options: { icon: true } }],
    });
  
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dummyimage.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'chicksgold.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'chicks-games.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'chicks-products.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};
