import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
        // Si no hay token, redirige al inicio de sesión
        return <Navigate to="/" replace />;
    }

    if (role !== 'admin') {
        // Si el rol no es 'admin', redirige al dashboard de usuario
        return <Navigate to="/Dashboard" replace />;
    }

    // Si hay token y el rol es 'admin', renderiza el contenido protegido
    return children;
};

export default ProtectedAdminRoute;