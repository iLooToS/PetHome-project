import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { IPet } from '../types/PetsTypes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface PetCardProps {
	pet: IPet
}

export default function AnimalCard({ pet }: PetCardProps) {
	const router = useRouter()
	return (
		<Card sx={{ maxWidth: 375 }}>
			<CardActionArea onClick={() => router.push(`/search/${pet.id}`)}>
				<CardMedia
					className='object-cover max-h-xs max-w-xs'
					component='img'
					// height='200'
					// width='300'
					src={pet.PetImages[0].url}
					alt='green iguana'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{pet.name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{pet.petType}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
