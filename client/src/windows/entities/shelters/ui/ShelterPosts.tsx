'use client'

import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import { Post } from '../shelterPosts/types/postTypes'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/src/windows/app/store/store'
import { deletePostThunk } from '../shelterPosts/postSlice'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	height: 650,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	padding: 2,
	backgroundColor: 'white',
	overflowY: 'auto', // Добавлено для прокрутки
}

interface Comment {
	id: number
	text: string
}

interface ShelterPostsProps {
	currentShelterPosts?: Post[]
}

const ShelterPosts = ({
	currentShelterPosts,
}: ShelterPostsProps): JSX.Element => {
	const [open, setOpen] = useState<boolean>(false)
	const { user } = useSelector((state: RootState) => state.auth)
	const { currentShelter } = useSelector((state: RootState) => state.shelters)
	const dispatch = useAppDispatch()

	const [selectedPost, setSelectedPost] = useState<Post | null>(null)
	const [comment, setComment] = useState<string>('')

	const handleOpen = (post: Post) => {
		setSelectedPost(post)
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
		setSelectedPost(null)
	}

	const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setComment(event.target.value)
	}

	// const handleCommentSubmit = () => {
	//   if (selectedPost) {
	//     selectedPost.comments.push({ id: Date.now(), text: comment });
	//     setComment("");
	//   }
	// };

	return (
		<div className='post-feed'>
			{currentShelterPosts &&
				currentShelterPosts
					.sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
					.map(shelterPost => (
						<div key={shelterPost.id} className='post'>
							<Image
								src={shelterPost?.ShelterPostImages[0]?.url}
								alt='Post Image'
								width={300}
								height={200}
							/>
							<div className='post-content'>
								<div className='flex justify-between'>
									<h2>{shelterPost.postName}</h2>
									<p>
										{new Date(shelterPost.createdAt).toLocaleString('ru-RU', {
											hour: '2-digit',
											minute: '2-digit',
											year: 'numeric',
											month: '2-digit',
											day: '2-digit',
										})}
									</p>
								</div>
								<p>{shelterPost.text}</p>
							</div>
							<Button
								variant='contained'
								color='inherit'
								onClick={() => handleOpen(shelterPost)}
							>
								Обсудить
							</Button>
							{user && currentShelter && user.id === currentShelter?.userId && (
								<Button
									variant='contained'
									color='error'
									onClick={() => dispatch(deletePostThunk(shelterPost.id))}
								>
									Удалить
								</Button>
							)}
						</div>
					))}
			{selectedPost && (
				<Modal
					className='p-3.5'
					open={open}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<Box sx={style}>
						<Image
							src={selectedPost.ShelterPostImages[0]?.url}
							alt='Post Image'
							width={300}
							height={200}
						/>
						<Typography variant='h6' component='h2'>
							{selectedPost.postName}
						</Typography>
						<Typography sx={{ mt: 2 }}>{selectedPost.text}</Typography>
						<Typography variant='h6' component='h2' sx={{ mt: 2 }}>
							Комментарии
						</Typography>
						{/* {selectedPost.comments.map((comment) => (
              <Typography key={comment.id} sx={{ mt: 1 }}>
                {comment.text}
              </Typography>
            ))} */}
						<TextField
							label='Ваш комментарий'
							variant='outlined'
							fullWidth
							value={comment}
							onChange={handleCommentChange}
							sx={{ mt: 2 }}
						/>
						<Button
							variant='contained'
							color='primary'
							// onClick={handleCommentSubmit}
							sx={{ mt: 2 }}
						>
							Отправить
						</Button>
					</Box>
				</Modal>
			)}
		</div>
	)
}

export default ShelterPosts
