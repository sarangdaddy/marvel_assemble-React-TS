import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home } from '@/routes/Home';
import { Detail } from '@/routes/Detail';
import { Layout } from '@/routes/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'character/:id', element: <Detail /> },
    ],
  },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
