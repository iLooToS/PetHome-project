import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material'
import AspectRatio from '@mui/joy/AspectRatio' // Use @mui/joy for AspectRatio  // Use @mui/material for Image
import { IPet } from '../types/PetsTypes'
import Image from 'next/image'

type PetCarouselProps = {
	pet: IPet | undefined
}

const PetCarousel: React.FC<PetCarouselProps> = ({ pet }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleChange = (now?: number, previous?: number) => {
		if (now !== undefined) {
			setActiveIndex(now)
		}
	}

	return (
		<div>
			{pet && pet.PetImages.length > 0 && (
				<>
					<Carousel
						index={activeIndex}
						onChange={handleChange}
						autoPlay={false}
						navButtonsAlwaysVisible={true}
						animation='slide'
						indicators={false}
					>
						{pet.PetImages.map(image => (
							<AspectRatio
								key={image.id}
								ratio='1'
								sx={{ borderRadius: '5%', minWidth: 350 }}
							>
								<Image
									style={{
										objectFit: 'fill',
										borderRadius: '5%',
									}}
									src={image.url}
									alt={image.url}
									width={350}
									height={200}
								/>
							</AspectRatio>
						))}
					</Carousel>
					<Box display='flex' justifyContent='center' mt={2}>
						{pet.PetImages.map((_, index) => (
							<Box
								key={index}
								width={10}
								height={10}
								borderRadius='50%'
								mx={0.5}
								bgcolor={index === activeIndex ? 'primary.main' : 'grey.400'}
							/>
						))}
					</Box>
				</>
			)}
		</div>
	)
}

export default PetCarousel
