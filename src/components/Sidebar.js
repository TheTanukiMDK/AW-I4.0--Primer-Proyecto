import React from "react";
import { PiUserCircleLight } from "react-icons/pi";
import "../styles/Dashboard.css";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <PiUserCircleLight size="10rem" className="icono-user" />
            <h2>Ricardo Beltran</h2>
            <nav>
                <ul>
                    <li><a className="button" href="/Dashboard">Dashboard</a></li>
                    <li><a className="button" href="/Proyectos">Proyectos</a></li>
                    <li><a className="button" href="/Equipos">Equipos</a></li>
                    <li><a className="button" href="/Recursos">Recursos</a></li>
                    <li><a className="button" href="/Cronograma">Cronograma</a></li>
                    <li><a className="Cerrar-Sesion" href="/">Cerrar sesión</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
