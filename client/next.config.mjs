/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	async rewrites() {
		return [
			{
				source: '/api',
				destination: 'https://localhost:3000/',
			},
		]
	},
}

export default nextConfig
