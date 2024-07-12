import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import RegistrationPage from '@/src/pages/auth/RegistrationPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Sign-in',
	...NO_INDEX_PAGE,
}

export default function AuthPage() {
	return (
			<RegistrationPage />
	)
}
