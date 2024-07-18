import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './src/windows/app/services/auth-token.service'
export async function middleware(request: NextRequest) {
	const { nextUrl, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)

	const isAuthPage = nextUrl.pathname.includes('sign')
	const isChatPage = nextUrl.pathname.includes('chat')

	// Если пользователь на странице авторизации и уже аутентифицирован
	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL('/', request.url))
	}

	// Если пользователь пытается зайти на страницу чата без refresh токена
	if (isChatPage && !refreshToken) {
		return NextResponse.redirect(new URL('/sign-in', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/chat/:path*', '/sign-in', '/sign-up'],
}
