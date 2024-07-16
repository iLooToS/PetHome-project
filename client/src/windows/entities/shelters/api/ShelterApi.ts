import { AxiosResponse } from "axios";
import {
  Shelter,
  ShelterCreateWithLocation,
  ShelterId,
} from "../type/shelterTypes";
import axiosInstance from "@/src/windows/app/services/axiosInstance";

class ShelterApi {
  static getAllShelter = async (): Promise<{
    message: "success";
    shelters: Shelter[];
  }> => {
    try {
      const result: AxiosResponse<{
        message: "success";
        shelters: Shelter[];
      }> = await axiosInstance.get("/shelters/");
      return result.data;
    } catch (error) {
      throw new Error("Не получил все Приюты");
    }
  };

  static getShelterById = async (
    id: ShelterId
  ): Promise<{
    message: "success";
    shelter: Shelter;
  }> => {
    try {
      const result: AxiosResponse<{
        message: "success";
        shelter: Shelter;
      }> = await axiosInstance.get(`/shelters/${id}`);
      return result.data;
    } catch (error) {
      throw new Error("Не получил приюты по id");
    }
  };

  // создание приюта и его локации без широты долготы
  static createShelter = async (
    body: ShelterCreateWithLocation
  ): Promise<Shelter> => {
    try {
      const result: AxiosResponse<{
        message: "success";
        shelter: Shelter;
      }> = await axiosInstance.post("/shelters/", body);
      return result.data.shelter;
    } catch (error) {
      throw new Error("Не создал приют");
    }
  };

  static deleteShelter = async (
    id: number
  ): Promise<{ message: "success"; id: number } | undefined> => {
    try {
      const result = await axiosInstance.delete(`/shelters/${id}`);
      if (result.data.message === "success") {
        return result.data;
      }
    } catch (error) {
      throw new Error("Не удалось удалить приют");
    }
  };
}

export default ShelterApi;
