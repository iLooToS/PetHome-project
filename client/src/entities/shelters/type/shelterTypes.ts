import { Location } from "../../locations/type/locationTypes"

export interface Shelter {
	id:number,
	name:string,
	userId:number,
	locationId:number,
	logo?:string,
	description:string,
	status:boolean,
	location?: Location
}

export interface currentShelter {
	id:number,
	name:string,
	userId:number,
	locationId:number,
	logo?:string,
	description:string,
	status:boolean,
	location: Location
}

export interface ShelterCreateWithLocation{
	name:string,
	city:string,
	streetName:string,
	logo?:string,
	description:string
}

