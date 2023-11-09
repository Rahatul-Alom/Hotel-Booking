import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main"
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ContuctUs from "../Pages/ContuctUs/ContuctUs";
import Rooms from "../Pages/Rooms/Rooms";
import MyBooking from "../Pages/MyBooking/MyBooking";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'/about',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/contuctUs',
          element: <ContuctUs></ContuctUs>
        },
        {
          path: '/rooms',
          element: <Rooms></Rooms>
        },
        {
          path: '/myBooking',
          element: <PrivateRoutes><MyBooking></MyBooking></PrivateRoutes>
        }
      ]

    },
  ]);

export default router;