import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import ShelterPage from '@/src/windows/pages/shelter/ShelterPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Shelter',
	...NO_INDEX_PAGE,
}

const page = ({ params }: { params: { slug: string } }): JSX.Element => {
	return (
		<div className='min-h-screen'>
			<ShelterPage shelterId={+params.slug} />
		</div>
	)
}
export default page
