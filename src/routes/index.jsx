import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/website/Home';
import LoginPage from '@/pages/auth/LoginPage';

const Routes = () => {
  // Public routes accessible to all users
  const routesForPublic = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([...routesForPublic]);

  return <RouterProvider router={router} />;
};

export default Routes;
