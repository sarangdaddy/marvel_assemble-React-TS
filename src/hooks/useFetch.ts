/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
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
  const activePromise = useRef<Promise<void> | null>(null);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      if (ignore) return;

      try {
        const response = await fetchFunction(...args);
        cacheData(cacheKey, response);

        setState((prevState) => ({
          ...prevState,
          status: 'fulfilled',
          data: response,
          cacheKey,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          status: 'rejected',
          error: error as Error,
          cacheKey,
        }));
      }
    };

    if (state.status === 'initial') {
      if (isDataValid(cacheKey)) {
        setState((prevState) => ({
          ...prevState,
          status: 'fulfilled',
          data: cacheData(cacheKey),
          cacheKey,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          status: 'pending',
        }));
        activePromise.current = fetchData();
      }
    }

    return () => {
      ignore = true;
    };
  }, [fetchFunction, cacheKey, cacheData, isDataValid, state.status]);

  if (state.status === 'pending' && activePromise.current) {
    throw activePromise.current;
  }
  if (state.status === 'rejected' && state.error) {
    throw state.error;
  }

  return state;
};
