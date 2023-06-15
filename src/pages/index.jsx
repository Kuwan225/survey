import MainLayout from "../layouts/MainLayout";
import admin from "./admin";
import home from "./home";
import loginAdmin from "./login-admin";
import thank from "./thank";

export default [
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path:"",
        element:home.element
      },
      {
        path:"/thank",
        element:thank.element
      },
      {
        path:"/login-admin",
        element:loginAdmin.element
      },
      {
        path:"/admin",
        element:admin.element
      },
      {
        path:"/admin/:id",
        element:admin.element
      },
    ]
  },
]