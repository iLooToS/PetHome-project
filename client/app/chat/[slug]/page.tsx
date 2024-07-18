import ChatDetail from "@/src/windows/pages/chat/CurrentChatPage";
import React from "react";

type pageProps = {}
const page = ({ params }: { params: { slug: string } }): JSX.Element => {
	
	return <div className='min-h-85'><ChatDetail  chatId={+params.slug} /></div>
}
export default page
