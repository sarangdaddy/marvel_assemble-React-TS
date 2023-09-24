import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import { CacheContextProvider } from './contexts/CacheContext';

export const App = () => {
  return (
    <>
      <CacheContextProvider>
        <RouterProvider router={router} />
      </CacheContextProvider>
    </>
  );
};
