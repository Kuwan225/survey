import { lazy } from "react";

const Component = lazy(()=>import("../views/Home/Home"))

export default {
    element:<Component/>
}