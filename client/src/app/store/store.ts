import currentShelter from "@/src/entities/shelters/currentShelter";
import shelterSlice from "@/src/entities/shelters/shelterSlice";
import { Shelter } from "@/src/entities/shelters/type/shelterTypes";
import authSlice from "@/src/entities/users/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authSlice,
    shelters: shelterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// достаем тип метода dispatch нашего store
type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store;

// создаем типизированный хук на основе текущего dispatch

export const useAppSelector = () => useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
