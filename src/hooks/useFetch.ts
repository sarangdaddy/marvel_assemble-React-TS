import { useState, useEffect } from 'react';

type Status = 'initial' | 'pending' | 'fulfilled' | 'rejected';

interface UseFetch<T> {
  data?: T;
  status: Status;
  error?: Error;
}

export const useFetch = <T>(
  fetchFunction: (...args: any[]) => Promise<T>,
  ...args: any[]
): UseFetch<T> => {
  const [state, setState] = useState<UseFetch<T>>({
    status: 'initial',
    data: undefined,
    error: undefined,
  });

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      setState({ ...state, status: 'pending' });

      try {
        const data = await fetchFunction(...args);
        if (!ignore) {
          setState({ status: 'fulfilled', data });
        }
      } catch (error) {
        if (!ignore) {
          setState({ status: 'rejected', error: error as Error });
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [fetchFunction]);

  return state;
};
