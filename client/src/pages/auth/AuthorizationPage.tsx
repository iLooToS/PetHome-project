'use client'
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { authorizationThunk } from '@/src/entities/users/authSlice'
import { UserForLoga } from '@/src/entities/users/types/userTypes'
import { useAppDispatch } from '@/src/app/store/store'
import { useRouter } from 'next/navigation'

const schema = object().shape({
	email: string().email().nullable().trim().required('Не email'),
	password: string()
		.trim()
		.required('Необходимо указать пароль')
		.min(5, 'пароль жолжен быть не менее 5 символов ')
		.max(20, 'пароль должен быть не более 20 символов'),
})

function AuthorizationPage(): JSX.Element {
	const dispatch = useAppDispatch()
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) })
	const onHadleSubmit = async (user: UserForLoga): Promise<void> => {
		console.log(user)
		void dispatch(authorizationThunk(user))
		router.push('/')
	}

	return (
		<form onSubmit={handleSubmit(onHadleSubmit)}>
			<label htmlFor='email'>
				Email:
				<input type='email' {...register('email')} />
				<span>{errors.email?.message}</span>
			</label>
			<br />
			<label htmlFor='password'>
				Password:
				<input type='password' {...register('password')} />
				<span>{errors.password?.message}</span>
			</label>
			<br />
			<div className='button-container'>
				<button type='submit'>Sign in</button>
			</div>
		</form>
	)
}

export default AuthorizationPage
