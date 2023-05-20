import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";
import Main from '../Layout/Main';
import AddToys from '../pages/AddToys/AddToys';
import AllToyDetails from '../pages/AllToyDetails/AllToyDetails';
import AllToys from '../pages/AllToys/AllToys';
import Blog from '../pages/Blog/Blog';
import Details from '../pages/Details/Details';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import MyToys from '../pages/MyToys/MyToys';
import Register from '../pages/Register/Register';
import UpdateToy from '../pages/UpdateToy/UpdateToy';
import PrivateRoute from './PrivateRoute';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/details/:id",
          element: <Details />,
          loader: ({params}) => fetch(`https://assignment-eleven-server-alpha.vercel.app/toys/${params.id}`)
        },
        {
          path: "/mytoys",
          element: <MyToys />,
        },
        {
          path: "/updateToy/:id",
          element: <UpdateToy />,
          loader: ({params}) => fetch(`https://assignment-eleven-server-alpha.vercel.app/myToys/${params.id}`)
        },
        {
          path: "/alltoys",
          element: <AllToys />
        },
        {
          path: "/allToyDetails/:id",
          element: <PrivateRoute><AllToyDetails /></PrivateRoute>,
          loader: ({params}) => fetch(`https://assignment-eleven-server-alpha.vercel.app/allToys/${params.id}`)
        },
        {
          path: "/addtoys",
          element:<AddToys />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/login",
          element: <Login />
        }, 
        {
          path: "/register",
          element: <Register />
        }
      ]
    },
  ]);



export default router;