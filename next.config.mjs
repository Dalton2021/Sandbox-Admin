/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/static/(.*)\\.css',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
      {
        source: '/static/(.*)\\.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript',
          },
        ],
      },
    ];
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = { fs: false };
  //   }
  //   return config;
  // },
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '/',
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
