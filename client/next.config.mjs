/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
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
