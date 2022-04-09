import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Blog from './pages/Blog';
import DashboardApp from './pages/DashboardApp';
import Demographic from './pages/Demographic';
import Home from './pages/Home';
//
import Login from './pages/Login';
import MinAppVersion from './pages/MinAppVersion';
import Overall from './pages/Overall';
import NotFound from './pages/Page404';
import Products from './pages/Products';
import Register from './pages/Register';
import User from './pages/User';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'demographic', element: <Demographic /> },
        { path: 'appversion', element: <MinAppVersion /> },
        { path: 'overall', element: <Overall /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
