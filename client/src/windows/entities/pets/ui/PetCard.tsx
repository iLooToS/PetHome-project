import Image from 'next/image'
import { IPet } from '../types/PetsTypes'

interface PetCardProps {
	pet: IPet
}

export default function PetCard({ pet }: PetCardProps): JSX.Element {

	return (
		<div
			style={{
				margin: '10px',
				padding: '10px',
				border: '1px solid #ddd',
				borderRadius: '5px',
				textAlign: 'center',
			}}
		>
			{/* <div
				style={{
					width: '100%',
					height: '100px',
					backgroundColor: '#a13b3b',
					marginBottom: '10px',
				}}
			> */}
			<Image
				src={pet.PetImages[0].url}
				alt={pet.name}
				width={300}
				height={200}
			/>
			{/* </div> */}
			<div>
				<h3>{pet.name}</h3>
				<p>{pet.petType}</p>
			</div>
		</div>
	)
}
