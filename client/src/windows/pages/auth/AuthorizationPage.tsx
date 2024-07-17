'use client'
import './styles/AuthorizationPage.css'
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { authorizationThunk } from '@/src/windows/entities/users/authSlice'
import { UserForLoga } from '@/src/windows/entities/users/types/userTypes'
import { useAppDispatch } from '@/src/windows/app/store/store'
import { useRouter } from 'next/navigation'
import { Button, TextField } from '@mui/material'
import AuthModal from '../../widgets/Modal/AuthModal'
import { unwrapResult } from '@reduxjs/toolkit'

const schema = object().shape({
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
})

function AuthorizationPage(): JSX.Element {
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
	const onHadleSubmit = (user: UserForLoga): void => {
		dispatch(authorizationThunk(user))
			.then(unwrapResult)
			.then(data => data.message)
			.then(() => {
				setIsSuccess(true)
				setMessage('Вы авторизовались!')
				handleOpen()
			})
			.catch(() => {
				setIsSuccess(false)
				setMessage('Ошибка авторизации')
				handleOpen()
			})
	}

	return (
		<div className='AuthorizationPage-container'>
			<div className='authorization-form-wrapper'>
				<form onSubmit={handleSubmit(onHadleSubmit)}>
					<label htmlFor='email'>
						<TextField
							id='auth-Email'
							label='Электронная почта'
							variant='outlined'
							type='email'
							{...register('email')}
						/>
						<span>{errors.email?.message}</span>
					</label>
					<label htmlFor='password'>
						<TextField
							id='auth-password'
							label='Пароль'
							variant='outlined'
							type='password'
							{...register('password')}
						/>
						<span>{errors.password?.message}</span>
					</label>
					<div className='button-container'>
						<Button variant='contained' type='submit'>
							Войти
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

export default AuthorizationPage
