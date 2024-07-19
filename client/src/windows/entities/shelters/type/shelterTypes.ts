import { Location } from "../../locations/type/locationTypes";
import { User } from "../../users/types/userTypes";

export interface Shelter {
  id: number;
  name: string;
  userId: number;
  locationId: number;
  logo: string;
  description: string;
  phone: string;
  status: boolean;
  Location?: Location;
  User?: User;
}

export interface currentShelter {
  id: number;
  name: string;
  userId: number;
  locationId: number;
  logo?: string;
  description: string;
  phone: string;
  status: boolean;
  location: Location;
}

export interface ShelterCreateWithLocation {
  [key: string]: any;
  name: string;
  city: string;
  streetName: string;
  logo?: string;
  description: string;
  phone: string;
  photo?: File | null;
}

export interface ShelterUpdate {
  [key: string]: any;
  name: string;
  city: string;
  streetName: string;
  logo?: string;
  description: string;
  phone: string;
  photo?: File | null;
}

export type ShelterId = Shelter["id"];
