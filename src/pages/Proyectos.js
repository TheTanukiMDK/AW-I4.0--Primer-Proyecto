import React from 'react'
import Sidebar from '../components/Sidebar'
import "../styles/Dashboard.css";
import "../styles/Proyectos.css"


function Proyectos() {
  return (
    <div className='dashboard'>
        <Sidebar />
        <main className="main-content">
                <header className="header">
                    <h1>Todos los proyectos</h1>
                </header>
                <div className='button-container'>
                <button className='button-proyects'>Nuevo Proyecto</button>
                </div>
                <div className='table-div'>
                <table className='table-structure'>
                    <thead>
                        <tr>
                            <th>Nombre de proyecto</th>
                            <th>Descripcion</th>
                            <th>Fecha de inicio</th>
                            <th>Fecha de fin</th>
                            <th>Estatus</th>
                            <th>Equipo responsable</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>xd</td>
                        </tr>
                        <tr>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>xd</td>
                        </tr>
                    </tbody>
                </table>
                </div>
               
        </main>
    </div>
  )
}

    export default Proyectos