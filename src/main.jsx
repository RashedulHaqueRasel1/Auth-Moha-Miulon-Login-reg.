import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Login from './component/Root/Login';
import Home from './component/Home/Home';
import Registration from './component/Registration/Registration';
import AuthProvider from './Provider/AuthProvider';
import Orders from './component/Orders/Orders';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import Profile from './component/Profile/Profile';
import DashBoard from './component/DashBoard/DashBoard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/orders',
        element: <PrivetRoute><Orders></Orders></PrivetRoute>
      },
      {
        path: '/profile',
        element: <PrivetRoute><Profile></Profile></PrivetRoute>
      },
      {
        path: '/dashboard',
        element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
