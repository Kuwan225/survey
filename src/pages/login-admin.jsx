import { lazy } from "react";

const Component = lazy(()=>import("../views/login-admin/LoginAdmin"))

export default {
    element:<Component/>
}