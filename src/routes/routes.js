import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoard from "../pages/DashBoard";
import Proyectos from "../pages/Proyectos";
import Equipos from "../pages/Equipos";
import Miembros from "../pages/Miembros";
import Recursos from "../pages/Recursos";
import Uso_Recursos from "../pages/Uso_Recursos";
import Cronograma from "../pages/Cronograma"

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
    },
    {
        path: "/Proyectos",
        element: <Proyectos></Proyectos>
    },
    {
        path: "/Equipos",
        element: <Equipos></Equipos>
    },
    {
        path: "/Miembros",
        element: <Miembros></Miembros>
    },
    {
        path: "/Recursos",
        element: <Recursos></Recursos>
    },
    {
        path: "/UsoRecursos",
        element: <Uso_Recursos></Uso_Recursos>
    },
    {
        path: "/Cronograma",
        element: <Cronograma></Cronograma>
    }
])