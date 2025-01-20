import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import "../styles/Dashboard.css";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <FaRegCircleUser size="10rem" className="icono-user" />
            <h2>Ricardo Beltran</h2>
            <nav>
                <ul>
                    <li><a className="button" href="#">Dashboard</a></li>
                    <li><a className="button" href="#">Proyectos</a></li>
                    <li><a className="button" href="#">Equipos</a></li>
                    <li><a className="button" href="#">Recursos</a></li>
                    <li><a className="button" href="#">Cronograma</a></li>
                    <li><a className="Cerrar-Sesion" href="/">Cerrar sesión</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
