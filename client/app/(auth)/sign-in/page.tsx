import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import AuthorizationPage from '@/src/windows/pages/auth/AuthorizationPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Sign-in',
	...NO_INDEX_PAGE,
}

const page = (): JSX.Element => {
	return <AuthorizationPage/>
}
export default page
