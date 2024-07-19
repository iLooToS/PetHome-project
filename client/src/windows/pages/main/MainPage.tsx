'use client'
import React, { useEffect } from 'react'
import { Container, Typography, Box, Button } from '@mui/material'

import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../app/store/store'
import { getAllSheltersThunk } from '../../entities/shelters/shelterSlice'
import Image from 'next/image'



const MainPage: React.FC = () => {
	const { shelters } = useSelector((state: RootState) => state.shelters)
	const dispatch = useAppDispatch()
	console.log(shelters)

	useEffect(() => {
		dispatch(getAllSheltersThunk())
	}, [dispatch])

	return (
		<Container maxWidth='md' sx={{ textAlign: 'center', marginTop: '5px' }}>
			<Image src='/img/logoPetHome.jpg' alt='Pet Home' height={300} width={300} />
			<Typography variant='h3' component='h1' gutterBottom>
				Pet Home
			</Typography>
			<Typography variant='h5' component='h2' gutterBottom>
				Платформа для поиска домашних животных
			</Typography>
			<Box >
				<Button variant='contained' color='primary' href='/about'>
					Узнать больше
				</Button>
				<Typography variant='h5' component='h2' gutterBottom>
					Приюты
				</Typography>
				<Box></Box>
			</Box>
		</Container>
	)
}

export default MainPage
