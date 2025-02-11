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
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '/',
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
