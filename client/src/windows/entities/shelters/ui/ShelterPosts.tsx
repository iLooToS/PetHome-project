'use client'

import {
	Avatar,
	Box,
	Button,
	DialogContent,
	Modal,
	TextField,
	Typography,
} from '@mui/material'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Post } from '../shelterPosts/types/postTypes'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/src/windows/app/store/store'
import {
	createPostCommentThunk,
	deletePostThunk,
	loadAllPostsThunk,
} from '../shelterPosts/postSlice'
import { loadAllUsersThunk } from '../../users/authSlice'
import './styles/ShelterPosts.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

export interface PostData {
	text: string
	shelterPostId: number
}

const style = {
	borderRadius: '5px',
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
	overflowY: 'auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	maxHeight: '80vh',
	maxWidth: '95%',
	margin: 'auto',
}

export interface PostComment {
	id: number
	text: string
	shelterPostId: string
	userId: string
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
	const { posts } = useSelector((state: RootState) => state.posts) as {
		posts: Post[]
	}
	const { users } = useSelector((state: RootState) => state.auth)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadAllUsersThunk())
	}, [dispatch])

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

	const handleCommentSubmit = () => {
		let data: PostData = {
			text: '',
			shelterPostId: 0,
		}
		if (selectedPost) {
			data.text = comment
			data.shelterPostId = selectedPost.id
			void dispatch(createPostCommentThunk(data))
			setComment('')
		}
	}

	// const scrollToTop = () => {
	//   document
	//     .querySelector("#comments-container")
	//     .scrollTo({ top: 0, behavior: "smooth" });
	// };

	const commentsContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (commentsContainerRef.current) {
			commentsContainerRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
			})
		}
	}, [posts])

	return (
		<div className='post-feed'>
						{/* <Typography className='text-center' variant='h6' component='h2'>
							Новости приюта
						</Typography> */}
			{currentShelterPosts &&
				currentShelterPosts
					.sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
					.map(shelterPost => (
						<div key={shelterPost.id} className='post'>
							{shelterPost &&
							shelterPost.ShelterPostImages &&
							shelterPost.ShelterPostImages[0]?.url ? (
								<Image
									src={shelterPost.ShelterPostImages[0]?.url}
									alt='Post Image'
									width={400}
									height={300}
								/>
							) : (
								<></>
							)}
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
								className='my-5'
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
					<Box sx={style} id='comments-container'>
						{/* {selectedPost.ShelterPostImages &&
						selectedPost.ShelterPostImages[0]?.url ? (
							<div className='self-center '>
								<Image
									src={selectedPost.ShelterPostImages[0].url}
									alt='Post Image'
									width={300}
									height={200}
								/>
							</div>
						) : (
							<></>
						)} */}
						<Typography variant='h6' component='h2'>
							{selectedPost.postName}
						</Typography>
						<Typography sx={{ mt: 2 }}>{selectedPost.text}</Typography>
						<Typography variant='h6' component='h2' sx={{ mt: 2 }}>
							Комментарии
						</Typography>
						<DialogContent
							sx={{ padding: '0', minHeight: '150px', width: '100%' }}
							dividers
						>
							<Box ref={commentsContainerRef} sx={{ width: '100%' }}>
								{posts &&
									posts
										.filter(post => post.id === selectedPost.id)
										.map(
											currentPost =>
												currentPost &&
												currentPost.ShelterPostComments &&
												currentPost.ShelterPostComments.map(comment => {
													const currentUser = users.find(
														user => user.id === Number(comment.userId)
													)
													return (
														currentUser && (
															<Box
																key={comment.id}
																sx={{
																	width: '100%',
																	display: 'flex',
																	alignItems: 'center',
																	mb: 2,
																	p: 2,
																	border: '1px solid #e0e0e0',
																	borderRadius: '8px',
																}}
															>
																{currentUser.img && currentUser.img ? (
																	<Box sx={{ mr: 2 }}>
																		<Avatar>
																			<Image
																				src={currentUser.img}
																				alt='User Image'
																				width={200}
																				height={200}
																			/>
																		</Avatar>
																	</Box>
																) : (
																	<Avatar>{currentUser.name}</Avatar>
																)}
																<Box sx={{ flexGrow: 1 }}>
																	<Typography
																		sx={{ mt: 1 }}
																		className='user-comment-wrapper-text'
																	>
																		{currentUser.name}:
																	</Typography>
																</Box>
																<Box sx={{ ml: 2 }}>
																	<Typography variant='body1'>
																		{comment.text}
																	</Typography>
																</Box>
															</Box>
														)
													)
												})
										)}
							</Box>
						</DialogContent>
						{user && [
							<TextField
								key={1}
								label='Ваш комментарий'
								variant='outlined'
								fullWidth
								value={comment}
								onChange={handleCommentChange}
								sx={{ mt: 2 }}
							/>,
							<Button
								key={2}
								variant='contained'
								color='primary'
								onClick={handleCommentSubmit}
								sx={{ mt: 2 }}
							>
								Отправить
							</Button>,
						]}
						<Box>
							{/* <Button onClick={scrollToTop}>
                <ArrowUpwardIcon />
              </Button> */}
						</Box>
					</Box>
				</Modal>
			)}
		</div>
	)
}

export default ShelterPosts
