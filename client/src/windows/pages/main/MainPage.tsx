'use client'
import React, { useEffect } from 'react'
import {
	Container,
	Typography,
	Box,
	Card,
	CardContent,
	CardMedia,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../app/store/store'
import { getAllSheltersThunk } from '../../entities/shelters/shelterSlice'
import Image from 'next/image'
import Carousel from 'react-material-ui-carousel'
import Link from 'next/link'

const MainPage: React.FC = () => {
	const { shelters } = useSelector((state: RootState) => state.shelters)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getAllSheltersThunk())
	}, [dispatch])

	return (
		<Container maxWidth='md'>
			<Box textAlign='center' mb={2}>
				<Image
					style={{ alignItems: 'center' }}
					src='/img/logoPetHomeNoBG.png'
					alt='Pet Home'
					height={300}
					width={300}
				/>
				<Typography
					variant='h5'
					component='h2'
					gutterBottom
					fontWeight='bold'
					style={{
						backgroundColor: 'rgba(0, 0, 0, 0.2)',
						color: 'black',
						padding: '0.5rem',
						borderRadius: '4px',
					}}
				>
					Платформа для поиска домашних животных
				</Typography>
			</Box>
			<Box mb={4}>
				<Typography
					variant='h6'
					component='p'
					gutterBottom
					fontWeight='bold'
					style={{
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						color: 'white',
						padding: '0.5rem',
						borderRadius: '4px',
					}}
				>
					Pet Home — это платформа для приютов и их питомцев, которая существует
					для того, чтобы питомцы могли найти себе дом.
				</Typography>
				<Box mt={4} textAlign='center'>
					<Typography
						variant='h5'
						component='h2'
						gutterBottom
						fontWeight='bold'
						style={{
							backgroundColor: 'rgba(0, 0, 0, 0.2)',
						color: 'black',
            
							padding: '0.5rem',
							borderRadius: '4px',
						}}
					>
						Домашние питомцы нуждаются в семье
					</Typography>
					<Typography
						variant='h6'
						component='p'
						gutterBottom
						fontWeight='bold'
						style={{
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							color: 'white',
							padding: '0.5rem',
							borderRadius: '4px',
						}}
					>
						Наши питомцы ждут вашего сообщения и очень хотят найти себе новый
						дом. Они принесут вам много радости и любви. Каждое животное
						заслуживает шанс на счастливую жизнь, и вы можете им в этом помочь.
						Примите решение сегодня, и дайте одному из них шанс стать частью
						вашей семьи.
					</Typography>
					<Image
						style={{ margin: '10px', borderRadius: '5%' }}
						src='/img/petMain.jpg'
						alt='Pet Home'
						height={250}
						width={300}
					/>
				</Box>
			</Box>
			<Typography
				variant='h5'
				component='p'
				gutterBottom
				fontWeight='bold'
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.2)',
						color: 'black',
					padding: '0.5rem',
					borderRadius: '4px',
				}}
			>
				На нашем сайте вы можете:
			</Typography>
			<Box
				component='ul'
				sx={{
					textAlign: 'left',
					display: 'inline-block',
					fontSize: '1rem',
					fontWeight: 'bold',
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					color: 'white',
					padding: '0.5rem',
					borderRadius: '4px',
				}}
			>
				<li>Посмотреть всех питомцев</li>
				<li>Посмотреть приюты</li>
				<li>
					Написать приюту для уточнения какой-либо информации и согласования,
					чтобы забрать питомца
				</li>
			</Box>
			<Typography
				variant='h5'
				component='p'
				gutterBottom
				fontWeight='bold'
				style={{
          marginTop:'5px',
					backgroundColor: 'rgba(0, 0, 0, 0.2)',
						color: 'black',
					padding: '0.5rem',
					borderRadius: '4px',
				}}
			>
				Со стороны владельца приюта вы можете:
			</Typography>
			<Box
				component='ul'
				sx={{
					textAlign: 'left',
					display: 'inline-block',
					fontSize: '1rem',
					fontWeight: 'bold',
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					color: 'white',
					padding: '0.5rem',
					borderRadius: '4px',
				}}
			>
				<li>Зарегистрировать свой приют</li>
				<li>Разместить своих питомцев</li>
				<li>Выкладывать новости касательно вашего приюта</li>
			</Box>
			<Box mt={4}>
				<Typography
					variant='h5'
					component='h2'
					gutterBottom
					style={{
						backgroundColor: 'rgba(0, 0, 0, 0.2)',
						color: 'black',
						padding: '0.5rem',
						borderRadius: '4px',
					}}
				>
					Приюты
				</Typography>
				<Carousel className='z-0' autoPlay navButtonsAlwaysVisible>
					{shelters.map(shelter => (
						<Box key={shelter.id} textAlign='center'>
							<Link href={`/shelter/${shelter.id}`} passHref>
								<Card
									style={{ height: '300px', borderRadius: '5%' }}
									sx={{ maxWidth: 250, mx: 'auto' }}
								>
									<Image
										// component='img'
										height={150}
										width={250}
										src={shelter.logo || 'defaultLogo.png'}
										alt={shelter.name}
									/>
									<CardContent>
										<Typography variant='h6' component='div'>
											{shelter.name}
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											Город: {shelter.Location?.city}
										</Typography>
									</CardContent>
								</Card>
							</Link>
						</Box>
					))}
				</Carousel>
			</Box>
		</Container>
	)
}

export default MainPage
