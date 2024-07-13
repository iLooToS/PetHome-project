import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/src/widgets/nav-bar/NavBar'
import { SITE_NAME } from '@/constants/seo.constants'
import { Providers } from './providers'
import Footer from '@/src/widgets/footer/Footer'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['greek'] })

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Pet Shelter',
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
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
