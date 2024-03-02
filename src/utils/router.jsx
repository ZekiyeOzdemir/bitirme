import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Logs from "../components/Logs/Logs";

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    // {
    //   path: "/profile",
    //   element: <Profile />,
    //   children: [
    //     {
    //       path: "/profile/", // `/profile` altındaki default rotaya `/` ekleyin
    //       element: <ProfileCard />,
    //     },
    //     {
    //       path: "/profile/logs",
    //       element: <Logs />,
    //     },
    //   ],
    // }
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/profile/user",
      element: <ProfileCard />,
    },
    {
      path: "/profile/logs",
      element: <Logs />,
    }
  ]);
};
