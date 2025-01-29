import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedUserRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
        // Si no hay token, redirige al inicio de sesión
        return <Navigate to="/" replace />;
    }

    if (role !== 'user') {
        // Si el rol no es 'user', redirige al dashboard de administrador
        return <Navigate to="/DashboardAdmin" replace />;
    }

    // Si hay token y el rol es 'user', renderiza el contenido protegido
    return children;
};

export default ProtectedUserRoute;