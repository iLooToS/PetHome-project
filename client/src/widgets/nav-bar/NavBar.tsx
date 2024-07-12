'use client'
import { RootState, useAppDispatch } from '@/src/app/store/store'
import { logoutThunk } from '@/src/entities/users/authSlice'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

const NavBar = (): JSX.Element => {
	const { user } = useSelector((state: RootState) => state.auth)
	const dispatch = useAppDispatch()
	const router = useRouter()
	const onHandleLogout = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault()
		void dispatch(logoutThunk())
		router.push('/')
	}
	return (
		<div className=' NavBar'>
			<Link href={'/'}>Домой</Link>
			{user ? (
				<>
					<p>Привет {user.name}</p>
					<button
						type='button'
						onClick={onHandleLogout}
						className='logoutButton'
					>
						Logout
					</button>
				</>
			) : (
				<>
			<Link href={'/sign-up'}>Регистрация</Link>
			<Link href={'/sign-in'}>Авторизация</Link>
				</>
			)}
		</div>
	)
}
export default NavBar
