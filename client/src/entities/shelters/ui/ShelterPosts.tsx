import Image from "next/image"

const ShelterPosts = (): JSX.Element => {
	return (
		<div className='post-feed'>
			<div className='post'>
				<Image src='/img/shelterPageLogo.jpg' alt='Post Image' />
				<div className='post-content'>
					<h2>Post Name</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
						consequuntur numquam, libero sit veniam non explicabo maxime
						adipisci. Praesentium, quam.
					</p>
				</div>
			</div>
			<div className='post'>
				<Image src='/img/shelterPageLogo.jpg' alt='Post Image' />
				<div className='post-content'>
					<h2>Post Name</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
						consequuntur numquam, libero sit veniam non explicabo maxime
						adipisci. Praesentium, quam.
					</p>
				</div>
			</div>
		</div>
	)
}

export default ShelterPosts
