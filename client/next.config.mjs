/** @type {import('next').NextConfig} */
const nextConfig = {
  output: `standalone`,
  reactStrictMode: false,
  images: {
    domains: ["87.228.16.34"],
  },
  // env: {
  //   API_URL: "http://localhost:3001",
  // },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://87.228.16.34:3000/api/:path*",
      },
      {
        source: "/img/:path*",
        destination: "http://87.228.16.34:3000/img/:path*",
      },
    ];
  },
};

export default nextConfig;
