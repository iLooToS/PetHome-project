import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './app/services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = url.includes('sign')

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL('/', url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL('/sign-in', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/sign-in', '/sign-up'],
}
