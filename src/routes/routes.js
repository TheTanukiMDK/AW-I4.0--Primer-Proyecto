import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoard from "../pages/DashBoard";

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>
    },
    {
        path: "/Registro",
        element: <Register></Register>
    },
    {
        path: "/Dashboard",
        element: <DashBoard></DashBoard>
    }
])