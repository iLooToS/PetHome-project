import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_NAME } from '@/constants/seo.constants'
import { Providers } from './providers'
import Footer from '@/src/windows/widgets/footer/Footer'
import { ReactNode } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import NavMenu from '@/src/windows/widgets/nav-bar/NavMenu'
import ThemeProviderComponent from './ThemeProvider'
import { SocketProvider } from '@/src/windows/app/services/useSocket'

const inter = Inter({ subsets: ['greek'] })

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'Pet Shelter',
}

interface RootLayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='ru'>
			<body
				className='min-h-screen 
			bg-[url(../public/img/backgroundPetHome.jpg)] bg-cover 
			'
			>
				<Providers>
					{/* <ThemeProviderComponent> */}
					<CssBaseline />
					<SocketProvider>
						<NavMenu />
						{children}
						<Footer />
					</SocketProvider>
					{/* </ThemeProviderComponent> */}
				</Providers>
			</body>
		</html>
	)
}
