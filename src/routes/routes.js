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
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";

export const rutas = createBrowserRouter([
    {
        path: "/",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        )
    },
    {
        path: "/Registro",
        element: (
            <PublicRoute>
                <Register />
            </PublicRoute>
        )
    },
    {
        path: "/Dashboard",
        element: (
            <ProtectedRoute>
                <DashBoard />
            </ProtectedRoute>
        )
    },
    {
        path: "/Proyectos",
        element: (
            <ProtectedRoute>
                <Proyectos />
            </ProtectedRoute>
        )
    },
    {
        path: "/Equipos",
        element: (
            <ProtectedRoute>
                <Equipos />
            </ProtectedRoute>
        )
    },
    {
        path: "/Miembros",
        element: (
            <ProtectedRoute>
                <Miembros />
            </ProtectedRoute>
        )
    },
    {
        path: "/Recursos",
        element: (
            <ProtectedRoute>
                <Recursos />
            </ProtectedRoute>
        )
    },
    {
        path: "/UsoRecursos",
        element: (
            <ProtectedRoute>
                <Uso_Recursos />
            </ProtectedRoute>
        )
    },
    {
        path: "/Cronograma",
        element: (
            <ProtectedRoute>
                <Cronograma />
            </ProtectedRoute>
        )
    }
])