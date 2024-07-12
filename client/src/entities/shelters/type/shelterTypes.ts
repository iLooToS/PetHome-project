export interface Shelter {
	id:number,
	name:string,
	userId:number,
	locationId:number,
	logo?:string,
	description:string,
	status:boolean
}

export interface ShelterCreateWithLocation{
	name:string,
	city:string,
	streetName:string,
	logo?:string,
	description:string
}

