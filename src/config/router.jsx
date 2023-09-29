import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import { PrivateLayout } from "../layout/PrivateLayout";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { NotFound } from '../pages/notFound';
import { Dashboard }  from '../pages/Dashboard';
import { Profile } from '../pages/Profile';
import { Service } from '../pages/Service';
import { About } from '../pages/About';
import { Home } from '../pages/Home';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <PrivateLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/dashboard/profile",
          element: <Profile />,
        },
        {
          path: "/dashboard/services",
          element: <Service />,
        },
      ],
    },
  ]);
