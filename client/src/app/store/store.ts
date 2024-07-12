import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../../entities/users/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// достаем тип метода dispatch нашего store
type AppDispatch = typeof store.dispatch;

export type StoreType = typeof store;

// создаем типизированный хук на основе текущего dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
