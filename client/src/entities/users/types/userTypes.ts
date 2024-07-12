export type User = {
	id: number
	roleId?: number
	name: string
	lastName: string
	email: string
	img?: string
}

export type UserForLoga = {
	email: string
	password: string
}

export type UserId = User['id']

export type UserWithoutIdwithPassword = Omit<User, 'id'> & {
	password: string
	cpassword?: string
}

export type UserWithoutId = Omit<User, 'id'>
