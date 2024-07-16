'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import PetsIcon from '@mui/icons-material/Pets'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/src/windows/app/store/store'
import { useRouter } from 'next/navigation'
import {
	logoutThunk,
	refreshUser,
} from '@/src/windows/entities/users/authSlice'
import Link from 'next/link'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { loadAllPetsThunk } from '@/src/windows/entities/pets/petsSlice'
import { ThemeContext } from '@/app/ThemeProvider'

function NavMenu(): JSX.Element {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	)
	const { user } = useSelector((state: RootState) => state.auth)
	const dispatch = useAppDispatch()
	const router = useRouter()
	const themeContext = React.useContext(ThemeContext)

	React.useEffect(() => {
		void dispatch(refreshUser())
		void dispatch(loadAllPetsThunk())
	}, [dispatch])

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	const onHandleLogout = (): void => {
		void dispatch(logoutThunk())
		handleCloseUserMenu()
		router.push('/')
	}

	return (
		<AppBar
			//  className='bg-sky-600'
			position='static'
		>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						Pets Home
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							<MenuItem onClick={handleCloseNavMenu}>
								<Link href='/'>
									<Typography textAlign='center'>Главная</Typography>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Link href='/search'>
									<Typography textAlign='center'>Поиск</Typography>
								</Link>
							</MenuItem>
						</Menu>
					</Box>
					<PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant='h5'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						Pets Home
					</Typography>
					<IconButton onClick={themeContext?.toggleTheme} color='inherit'>
						{themeContext?.toggleTheme ? <LightModeIcon /> : <DarkModeIcon />}
					</IconButton>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Link href={'/'}>
							<Button
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								Главная
							</Button>
						</Link>
						<Link href={'/search'}>
							<Button
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								Поиск
							</Button>
						</Link>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
								color='inherit'
							>
								<AccountCircle />
								{/* <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' /> */}
							</IconButton>
						</Tooltip>
						<Menu
							sx={{
								mt: '45px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{user
								? [
										<>
											<Typography key={user.id} textAlign='center'>
												Привет!
												<p>{user.name}</p>
											</Typography>
											<Link key='profile' href={'/profile'}>
												<MenuItem onClick={handleCloseUserMenu}>
													<Typography
														sx={{ alignText: 'center' }}
														textAlign='center'
													>
														Профиль
													</Typography>
												</MenuItem>
											</Link>
											<MenuItem key='logout' onClick={onHandleLogout}>
												<Typography
													sx={{ alignText: 'center' }}
													textAlign='center'
												>
													Выход
												</Typography>
											</MenuItem>
										</>,
								  ]
								: [
										<Link key='sign-up' href={'/sign-up'}>
											<MenuItem onClick={onHandleLogout}>
												<Typography textAlign='center'>Регистрация</Typography>
											</MenuItem>
										</Link>,
										<Link key='sign-in' href={'/sign-in'}>
											<MenuItem onClick={onHandleLogout}>
												<Typography textAlign='center'>Авторизация</Typography>
											</MenuItem>
										</Link>,
								  ]}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default NavMenu
