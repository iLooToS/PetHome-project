import ChatList from '@/src/windows/pages/chat/ChatListPage'
import React from 'react'

type pageProps = {}
const page = ({}: pageProps): JSX.Element => {
	return <div className='min-h-screen'><ChatList/></div>
}
export default page
