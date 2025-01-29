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
                        <h3>Equipos totales</h3>
                        <p>200</p>
                    </div>
                    <div className="card">
                        <h3>Proyectos activos</h3>
                        <p>9000</p>
                    </div>
                    <div className="card">
                        <h3>Proyectos terminados</h3>
                        <p>4521</p>
                    </div>
                </section>
                <section className="chart-section">
                    <h2>Calendario de actividades</h2>
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
