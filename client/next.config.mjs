/** @type {import('next').NextConfig} */
const nextConfig = {
  output: `standalone`,
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
  env: {
    API_URL: 'http://backend:3000',
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://backend:3000/api/:path*",
      },
      {
        source: "/img/:path*",
        destination: "http://backend:3000/img/:path*",
      },
    ];
  },
};

export default nextConfig;
