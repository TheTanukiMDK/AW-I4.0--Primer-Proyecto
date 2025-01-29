import React from "react";
import { PiUserCircleLight } from "react-icons/pi";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Eliminar el token de autenticación
        localStorage.removeItem("token");
        // Redirigir al usuario a la página de inicio de sesión
        navigate("/");
    };

    return (
        <aside className="sidebar">
            <PiUserCircleLight size="10rem" className="icono-user" />
            <nav>
                <ul>
                    <li><a className="button" href="/Dashboard">Dashboard</a></li>
                    <li><a className="button" href="/Proyectos">Empleados</a></li>
                    <li><a className="button" href="/Proyectos">Proyectos</a></li>
                    <li><a className="button" href="/Equipos">Equipos</a></li>
                    <li><a className="button" href="/Recursos">Recursos</a></li>
                    <li><button className="Cerrar-Sesion" onClick={handleLogout}>Cerrar sesión</button></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;