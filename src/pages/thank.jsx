import { lazy } from "react";

const Component = lazy(()=>import("../views/Thank/Thank"))

export default {
    element:<Component/>
}