import PetSlice from '@/src/windows/entities/pets/petsSlice'
import shelterSlice from '@/src/windows/entities/shelters/shelterSlice'
import { Shelter } from '@/src/windows/entities/shelters/type/shelterTypes'
import authSlice from '@/src/windows/entities/users/authSlice'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		shelters: shelterSlice.reducer,
		pets: PetSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

// достаем тип метода dispatch нашего store
type AppDispatch = typeof store.dispatch
export type StoreType = typeof store

// создаем типизированный хук на основе текущего dispatch

export const useAppSelector = () => useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store
