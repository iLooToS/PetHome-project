"use client"
import { RootState, useAppDispatch } from '@/src/app/store/store'
import { createShelterThunk } from '@/src/entities/shelters/shelterSlice'
import { ShelterCreateWithLocation } from '@/src/entities/shelters/type/shelterTypes'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { number, object, ref, string } from 'yup';

const schema = object().shape({
	name: string().nullable().trim().required('Обязательно для заполнения'),
	city: string().nullable().trim().required('Обязательно для заполнения'),
	streetName: string().nullable().trim().required('Обязательно для заполнения'),
	description: string().nullable().trim().required('Обязательно для заполнения'),
})

const ProfilePage: React.FC = () => {
	const { user } = useSelector((state: RootState) => state.auth)
	const dispatch = useAppDispatch()

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onHadleSubmit = async (createShelter: ShelterCreateWithLocation): Promise<void> => {
    void dispatch(createShelterThunk(createShelter));
  };

	return (
		<div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
			<main style={{ textAlign: 'center' }}>
				<div style={{ marginBottom: '20px' }}>
					<div
						style={{
							width: '100px',
							height: '100px',
							borderRadius: '50%',
							backgroundColor: '#C4C4C4',
							margin: '0 auto',
						}}
					></div>
					<div style={{ marginTop: '10px' }}>
						<h2>{user?.name}</h2>
						<p>{user?.email}</p>
						<button>Edit</button>
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onHadleSubmit)}
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<input
						type='text'
						{...register('name')}
						placeholder='Shelter Name'
						style={{ margin: '10px 0', padding: '10px', width: '100%' }}
					/>
					<input
						type='text'
						{...register('description')}
						placeholder='Description'
						style={{ margin: '10px 0', padding: '10px', width: '100%' }}
					/>
					<input
						type='text'
						{...register('city')}
						placeholder='City'
						style={{ margin: '10px 0', padding: '10px', width: '100%' }}
					/>
					<input
						type='text'
						{...register('streetName')}
						placeholder='Street Name'
						style={{ margin: '10px 0', padding: '10px', width: '100%' }}
					/>
					<button
						type='submit'
						style={{
							padding: '10px 20px',
							backgroundColor: 'black',
							color: 'white',
							border: 'none',
							borderRadius: '5px',
						}}
					>
						Register Shelter
					</button>
				</form>
			</main>
		</div>
	)
}

export default ProfilePage
