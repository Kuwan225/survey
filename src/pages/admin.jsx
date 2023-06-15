import { lazy } from "react";

const Component = lazy(()=>import("../views/admin/Admin"))

export default {
    element:<Component/>
}