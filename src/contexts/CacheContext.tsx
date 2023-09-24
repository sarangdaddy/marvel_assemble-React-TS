/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from 'react';
import cacheManager from '@/helpers/cacheManager';

interface ICacheContext {
  cacheData: (key: string, data?: any) => any;
  isDataValid: (key: string) => boolean;
}

export const CacheContext = createContext<ICacheContext>({} as ICacheContext);

interface CacheContextProviderProps {
  children: React.ReactNode;
}

export const CacheContextProvider = ({
  children,
}: CacheContextProviderProps) => {
  const { cacheData, isDataValid } = cacheManager();

  return (
    <CacheContext.Provider value={{ cacheData, isDataValid }}>
      {children}
    </CacheContext.Provider>
  );
};

export const useCacheContext: () => ICacheContext = () =>
  useContext(CacheContext);
