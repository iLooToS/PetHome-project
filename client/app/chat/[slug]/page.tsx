import ChatDetail from '@/src/windows/pages/chat/CurrentChatPage'
import React from 'react'

const chats = [
  { id: 1, name: 'Чат 1', messages: [{ user: 'Алексей', text: 'Привет' }, { user: 'Иван', text: 'Как дела?' }] },
  { id: 2, name: 'Чат 2', messages: [{ user: 'Мария', text: 'Добрый день' }, { user: 'Сергей', text: 'Что нового?' }] },
];
type pageProps = {}
const page = ({ params }: { params: { slug: string } }): JSX.Element => {
	
	return <div className='min-h-screen'><ChatDetail chats={chats} chatId={+params.slug} /></div>
}
export default page
