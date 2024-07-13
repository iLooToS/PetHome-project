import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/src/widgets/nav-bar/NavBar'
import { SITE_NAME } from '@/constants/seo.constants'
import { Providers } from './providers'
import Footer from '@/src/widgets/footer/Footer'

const inter = Inter({ subsets: ['greek'] })

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Pet Shelter',
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<Providers>
					<NavBar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
