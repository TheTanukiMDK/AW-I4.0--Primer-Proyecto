import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
    const token = localStorage.getItem("token"); // Verifica si el token existe

    if (token) {
        // Si hay token, redirige al dashboard
        return <Navigate to="/Dashboard" replace />;
    }

    // Si no hay token, renderiza el contenido público
    return children;
};

export default PublicRoute;