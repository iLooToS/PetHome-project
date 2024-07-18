// AuthModal.js
import React from 'react'
import { Modal, Box, Typography, Button } from '@mui/material'

// Стили для модального окна
const style = {
	borderRadius: "5px",
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

interface AuthModalProps {
	open: boolean
	handleClose: () => void
	message: string
	isSuccess: boolean
}

const AuthModal: React.FC<AuthModalProps> = ({
	open,
	handleClose,
	message,
	isSuccess,
}) => {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-title'
			aria-describedby='modal-description'
		>
			<Box sx={style}>
				<Typography id='modal-title' variant='h6' component='h2'>
					{isSuccess ? '' : 'Ошибка'}
				</Typography>
				<Typography id='modal-description' sx={{ mt: 2 }}>
					{message}
				</Typography>
				<Button onClick={handleClose} sx={{ mt: 2 }}>
					Закрыть
				</Button>
			</Box>
		</Modal>
	)
}

export default AuthModal
