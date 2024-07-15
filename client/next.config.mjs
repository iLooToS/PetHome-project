/** @type {import('next').NextConfig} */
const nextConfig = {
  output: `standalone`,
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://backend:4000/api/:path*",
      },
      {
        source: "/img/:path*",
        destination: "http://backend:4000/img/:path*",
      },
    ];
  },
};

export default nextConfig;
