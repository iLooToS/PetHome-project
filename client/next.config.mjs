/** @type {import('next').NextConfig} */
const nextConfig = {
  output: `standalone`,
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4000/api/:path*",
      },
      {
        source: "/img/:path*",
        destination: "http://localhost:4000/img/:path*",
      },
    ];
  },
};

export default nextConfig;
