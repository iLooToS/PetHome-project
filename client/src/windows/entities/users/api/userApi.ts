import type { AxiosResponse } from "axios";
import axiosInstance from "@/src/windows/app/services/axiosInstance";
import type {
  User,
  UserForLoga,
  UserWithoutIdwithPassword,
} from "../types/userTypes";

type ResForAuth = {
  message: "success";
  user: User;
  accessToken: string;
};

class AuthApi {
  static getAllUsers = async (): Promise<User[]> => {
    try {
      const response: AxiosResponse<{ message: string; users: User[] }> =
        await axiosInstance.get("/users/");
      return response.data.users;
    } catch (error) {
      throw new Error("Не получил все посты");
    }
  };

  static registration = async (
    body: UserWithoutIdwithPassword
  ): Promise<ResForAuth> => {
    try {
      const result: AxiosResponse<ResForAuth> = await axiosInstance.post(
        "/auth/registration",
        body
      );
      return result.data;
    } catch (error) {
      throw new Error("Не регает че то");
    }
  };

  static authorization = async (body: UserForLoga): Promise<ResForAuth> => {
    try {
      const result: AxiosResponse<ResForAuth> = await axiosInstance.post(
        "/auth/authorization",
        body
      );
      return result.data;
    } catch (error) {
      throw new Error("Не логает че то");
    }
  };

  static refreshUser = async (): Promise<ResForAuth> => {
    try {
      const result: AxiosResponse<ResForAuth> = await axiosInstance.get(
        "/tokens/refresh"
      );
      return result.data;
    } catch (error) {
      throw new Error(`Не обновляет че то`);
    }
  };

  static logout = async (): Promise<{ message: "success" }> => {
    try {
      const result: AxiosResponse<{ message: "success" }> =
        await axiosInstance.get("/auth/logout");
      return result.data;
    } catch (error) {
      throw new Error("Не выходит че то");
    }
  };

  static updateUser = async (
    body: FormData
  ): Promise<User> => {
    try {
      const result: AxiosResponse<User> = await axiosInstance.put(
        "/auth/update",
        body
      );
      return result.data.user;
    } catch (error) {
      throw new Error("Не изменяет че то");
    }
  };
}

export default AuthApi;
