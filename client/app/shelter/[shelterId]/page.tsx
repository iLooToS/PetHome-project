import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import ShelterPage from '@/src/pages/shelter/ShelterPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Shelter',
	...NO_INDEX_PAGE,
}

const page = (): JSX.Element => {
	return <ShelterPage />
}
export default page