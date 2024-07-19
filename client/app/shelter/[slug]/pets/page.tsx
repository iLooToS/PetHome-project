import SearchPage from '@/src/windows/pages/search/SearchPage'
import ShelterPetsPage from '@/src/windows/pages/shelter/ShelterPetsPage'

const page = (): JSX.Element => {
	return (
		<div className='min-h-screen'>
			<ShelterPetsPage />
		</div>
	)
}
export default page
