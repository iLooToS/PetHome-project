/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
    domains: ['localhost'],
  },
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:3000/api/:path*',
			},
			{
				source: '/img/:path*',
				destination: 'http://localhost:3000/img/:path*',
			},
		]
	},
}

export default nextConfig
