import React, { ReactNode, useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'

interface RootLayoutProps {
	children: ReactNode
}

const layout = ({ children }: RootLayoutProps): JSX.Element => {
	return <div className=' layout'>{children}</div>
}
export default layout
