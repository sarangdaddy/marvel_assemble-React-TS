/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useCacheContext } from '@/contexts/CacheContext';

type Status = 'initial' | 'pending' | 'fulfilled' | 'rejected';

interface UseFetch<T> {
  data?: T;
  status: Status;
  error?: Error;
  cacheKey: string;
}

interface FetchOptions<T> {
  fetchFunction: (...args: any[]) => Promise<T>;
  args: any[];
  cacheKey: string;
}

export const useFetch = <T>({
  fetchFunction,
  args,
  cacheKey,
}: FetchOptions<T>): UseFetch<T> => {
  const [state, setState] = useState<UseFetch<T>>({
    status: 'initial',
    data: undefined,
    error: undefined,
    cacheKey,
  });

  const { cacheData, isDataValid } = useCacheContext();
  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      if (ignore) return;

      setState((state) => ({ ...state, status: 'pending' }));

      try {
        const response = await fetchFunction(...args);

        cacheData(cacheKey, response);
        setState((state) => ({
          ...state,
          status: 'fulfilled',
          data: response,
          cacheKey,
        }));
      } catch (error) {
        setState((state) => ({
          ...state,
          status: 'rejected',
          error: error as Error,
          cacheKey,
        }));
      }
    };

    if (state.status === 'initial') {
      if (isDataValid(cacheKey)) {
        setState((state) => ({
          ...state,
          status: 'fulfilled',
          data: cacheData(cacheKey),
          cacheKey,
        }));
      } else {
        fetchData();
      }
    }

    return () => {
      ignore = true;
    };
  }, [fetchFunction, cacheKey, cacheData, isDataValid, state.status]);

  return state;
};
