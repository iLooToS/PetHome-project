'use client';

import store from '@/src/windows/app/store/store'
import { Provider } from 'react-redux';


interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <Provider store={store}>{children}</Provider>;
};
