import { createBrowserRouter } from 'react-router-dom';

import { Home } from '@/routes/Home';
import { Detail } from '@/routes/Detail';
import { Layout } from '@/routes/Layout';
import { ROUTE_PATH } from './routePath';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <Layout />,
    children: [
      { path: ROUTE_PATH.HOME, element: <Home /> },
      { path: ROUTE_PATH.DETAIL, element: <Detail /> },
    ],
  },
]);
