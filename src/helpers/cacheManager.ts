/* eslint-disable @typescript-eslint/no-explicit-any */
const ONE_MINUTE_MS = 60 * 1000;

const cacheManager = (cacheExpirationDuration: number = ONE_MINUTE_MS * 10) => {
  const cache: Record<string, { data: any; expireTime: number }> = {};

  return {
    cacheData: (key: string, data?: any) => {
      if (cache[key]) {
        const { data: cachedData, expireTime } = cache[key];
        if (expireTime > Date.now()) {
          return cachedData;
        }
      }
      cache[key] = { data, expireTime: Date.now() + cacheExpirationDuration };
      return data;
    },
    isDataValid: (key: string) => {
      if (!cache[key]) return false;
      const { expireTime } = cache[key];
      return expireTime > Date.now();
    },
  };
};

export default cacheManager;
