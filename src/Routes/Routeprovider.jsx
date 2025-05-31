import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import EditInfo from "../Pages/EditInfo";
import Description from "../Pages/Description";
import Errorpage from "../Components/Errorpage";
import Login from "../Components/Login";
import UserDetails from "../Components/UserDetails";
import Additem from "../Pages/Additem";
import AuthenticationLayout from "../Layouts/AuthenticationLayout";
import UpdateProfile from "../Components/UpdateProfile";
import Register from "../Components/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/edit/:id",
        Component: EditInfo,
        loader: async ({ params }) => {
          return await fetch(`http://localhost:3000/coffees/${params.id}`);
        },
      },
      {
        path: "/description/:id",
        Component: Description,
        loader: async ({ params }) => {
          return await fetch(`http://localhost:3000/coffees/${params.id}`);
        },
      },
      { path: "/add-item", Component: Additem },
      {
        path: "/users",
       element:<PrivateRoutes><UserDetails></UserDetails></PrivateRoutes>
      },
      {
        path: "/users-profile-update/:id",
        Component: UpdateProfile,
        loader: async ({ params }) => {
          return await fetch(`http://localhost:3000/users/${params.id}`);
        },
      },
    ],
  },
  { path: "/*", Component: Errorpage },
  {
    path: "/authentication",
    Component: AuthenticationLayout,
    children: [
      {
        index: true,
        Component: Login,
      },
      { path: "register", Component: Register },
    ],
  },
]);

export default router;
