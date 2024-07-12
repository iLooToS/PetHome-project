'use client'
import store from '@/src/app/store/store'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

export function Providers({ children }: PropsWithChildren): JSX.Element {
	return <Provider store={store}>{children}</Provider>
} 
