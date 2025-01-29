import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../../styles/Dashboard.css";
import { FaRegCircleUser } from "react-icons/fa6";
import SidebarAdmin from "../../components/SidebarAdmin";
const DashboardAdmin = () => {
    const chartRef = useRef(null); // Referencia al canvas
    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");
        let chartInstance; // Guardar la instancia del gráfico
        const data = {
            labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
            datasets: [
                {
                    label: "Ingresos",
                    data: [120, 190, 300, 250, 220, 340, 400],
                    backgroundColor: "#B4FFA5",
                    borderColor: "#B4FFA5",
                    borderWidth: 1,
                },
            ],
        };
        const config = {
            type: "bar",
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        };
        // Crear el gráfico
        chartInstance = new Chart(ctx, config);
        // Limpiar el gráfico al desmontar el componente
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, []); // Se ejecuta una vez al montar el componente

    return (

        <div className="dashboard">
            <SidebarAdmin />
            <main className="main-content">
                <header className="header">
                    <h1>Bienvenido Administrador</h1>
                </header>
                <section className="content">
                    <div className="card">
                        <h3>Empleados totales</h3>
                        <p>91,10230</p>
                    </div>
                    <div className="card">
                        <h3>Ingresos totales</h3>
                        <p>$ 51,2913</p>
                    </div>
                    <div className="card">
                        <h3>Ingresos ultimos 3 meses</h3>
                        <p>$ 10,2321</p>
                    </div>
                </section>
                <section className="chart-section">
                    <h2>Ingresos semanales</h2>
                    <canvas id="myChart" ref={chartRef} width="80" height="40"></canvas>
                </section>
            </main>
        </div>
    );
};

export default DashboardAdmin;