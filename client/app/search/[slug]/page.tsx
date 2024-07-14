import CurrentPetPage from '@/src/pages/pets/CurrentPetPage'
import React from 'react'

type pageProps = {}
const page = ({ params }: { params: { slug: string } }): JSX.Element => {
	return (
		<div className='min-h-screen'>
			<CurrentPetPage petId={+params.slug} />
		</div>
	)
}
export default page
