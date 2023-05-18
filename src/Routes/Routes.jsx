import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import Main from '../Layout/Main';
import AddToys from '../pages/AddToys/AddToys';
import AllToys from '../pages/AllToys/AllToys';
import Blog from '../pages/Blog/Blog';
import Details from '../pages/Details/Details';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import MyToys from '../pages/MyToys/MyToys';
import Register from '../pages/Register/Register';


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
          loader: ({params}) => fetch(`http://localhost:5300/toys/${params.id}`)
        },
        {
          path: "/mytoys",
          element: <MyToys />
        },
        {
          path: "/alltoys",
          element: <AllToys />
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