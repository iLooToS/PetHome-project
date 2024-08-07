'use client'
import './styles/RegistrationPage.css'
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { object, ref, string } from 'yup'
import { useAppDispatch } from '../../app/store/store'
import { registrationThunk } from '@/src/windows/entities/users/authSlice'
import { useRouter } from 'next/navigation'
import { Avatar, Button, TextField, Typography } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import AuthModal from '../../widgets/Modal/AuthModal'

const schema = object().shape({
	name: string().nullable().trim().required('Обязательно для заполнения'),
	lastName: string().nullable().trim().required('Обязательно для заполнения'),
	email: string()
		.email()
		.nullable()
		.trim()
		.required('Необходимо указать email'),
	password: string()
		.trim()
		.required('Необходимо указать пароль')
		.min(5, 'пароль жолжен быть не менее 5 символов ')
		.max(20, 'пароль должен быть не более 20 символов'),
	cpassword: string()
		.trim()
		.required('Необходимо повторить пароль')
		.min(5, 'пароль жолжен быть не менее 5 символов ')
		.max(20, 'пароль должен быть не более 20 символов')
		.oneOf([ref('password')], 'Пароли не совпадают'),
})

function RegistrationPage(): JSX.Element {
	const [open, setOpen] = useState(false)
	const [message, setMessage] = useState('')
	const [isSuccess, setIsSuccess] = useState(false)
	const dispatch = useAppDispatch()
	const router = useRouter()
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
		if (isSuccess) {
			router.push('/')
		}
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) })

	//TODO пока тут эни, нужно бы подправить
	const onHadleSubmit = (user: any): void => {
		const { cpassword, ...userWithoutCpassword } = user
		dispatch(registrationThunk(userWithoutCpassword))
			.then(unwrapResult)
			.then(data => data.message)
			.then(() => {
				setIsSuccess(true)
				setMessage('Вы зарегистрировались!')
				handleOpen()
			})
			.catch(() => {
				setIsSuccess(false)
				setMessage('Ошибка регистрации')
				handleOpen()
			})
	}

	return (
		<div className='RegistrationPage-container'>
			<div className='registration-form-wrapper'>
				<form onSubmit={handleSubmit(onHadleSubmit)}>
					<Avatar
						sx={{ m: 1, bgcolor: 'gray', width: 52, height: 52 }}
						// src='../../../../public/img/monkeyAuth.svg'
					>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Регистрация
					</Typography>
					<label htmlFor='name'>
						<TextField
							className='w-60'
							id='reg-Name'
							label='Имя'
							variant='outlined'
							type='text'
							{...register('name')}
						/>
						<span>{errors.name?.message}</span>
					</label>
					<label htmlFor='lastName'>
						<TextField
							className='w-60'
							id='reg-lastName'
							label='Фамилия'
							variant='outlined'
							type='text'
							{...register('lastName')}
						/>
						<span>{errors.name?.message}</span>
					</label>
					<label htmlFor='email'>
						<TextField
							className='w-60'
							id='reg-Email'
							label='Электронная почта'
							variant='outlined'
							type='email'
							{...register('email')}
						/>
						<span>{errors.email?.message}</span>
					</label>
					<label htmlFor='password'>
						<TextField
							className='w-60'
							id='reg-Password'
							label='Пароль'
							variant='outlined'
							type='password'
							{...register('password')}
						/>
						<span>{errors.password?.message}</span>
					</label>
					<label htmlFor='cpassword'>
						<TextField
							className='w-60'
							id='reg-cpassword'
							label='Повторите пароль'
							variant='outlined'
							type='password'
							{...register('cpassword')}
						/>
						<span>{errors.cpassword?.message}</span>
					</label>
					<div className='button-container'>
						<Button variant='contained' type='submit'>
							Зарегистрироваться
						</Button>
					</div>
					<AuthModal
						open={open}
						handleClose={handleClose}
						message={message}
						isSuccess={isSuccess}
					/>
				</form>
			</div>
		</div>
	)
}

export default RegistrationPage
