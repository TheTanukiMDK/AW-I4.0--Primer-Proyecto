import React from "react";
import "../styles/Dashboard.css";
import { FaRegCircleUser } from "react-icons/fa6";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Sidebar from "../components/Sidebar";


const Dashboard = () => {
    const events = [
        { title: "Reunión de equipo", start: "2025-01-22T10:00:00", end: "2025-01-22T11:00:00" },
        { title: "Entrega de proyecto", start: "2025-01-25" },
        { title: "Día de descanso", start: "2025-01-28" },
    ];

    return (
        <div className="dashboard">
            <Sidebar />
            <main className="main-content">
                <header className="header">
                    <h1>Bienvenido de nuevo</h1>
                </header>
                <section className="content">
                    <div className="card">
                        <h3>Usuarios Totales</h3>
                        <p>91,10230</p>
                    </div>
                    <div className="card">
                        <h3>Usuarios Activos</h3>
                        <p>31,2913</p>
                    </div>
                    <div className="card">
                        <h3>Usuarios Activos los últimos 7 días</h3>
                        <p>17,2321</p>
                    </div>
                </section>
                <section className="chart-section">
                    <h2>Calendario</h2>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        events={events}
                        selectable={true}
                        editable={true}
                    />
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
