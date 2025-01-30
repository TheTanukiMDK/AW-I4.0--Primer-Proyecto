// components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    console.log(role); // Verificamos el valor del rol almacenado
    console.log('Token:', token);  // Verificamos token

    if (!token) {
        return <Navigate to="/" replace />; // Redirige al login si no hay token
    }

    if (allowedRoles && !allowedRoles.includes(role)) {
        return <Navigate to="/" replace />; // Redirige si el rol no está permitido
    }

    return children;
};

export default ProtectedRoute;