import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import "../styles/Dashboard.css";
import "../styles/Proyectos.css"
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import ModalAddProyectos from '../components/ModalAddProyectos';
import ModalUpdateProyectos from '../components/ModalUpdateProyectos';

function Proyectos() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const openModal2 = () => setIsModalOpen2(true);
    const closeModal2 = () => setIsModalOpen2(false);
    return (
        <div className='dashboard'>
            <Sidebar />
            <main className="main-content">
                <header className="header">
                    <h1>Todos los proyectos</h1>
                </header>
                <div className='button-container'>
                    <button className='button-proyects' onClick={openModal}>Nuevo Proyecto</button>
                </div>
                {/*Seccion del modal*/}
                <ModalAddProyectos isOpen={isModalOpen} onClose={closeModal}>
                    <h2>Agregar un Nuevo Proyecto</h2>

                    <form className="form" >
                        <div className="form-group">
                            <label>Nombre del proyecto</label>
                            <input
                                type="text"
                                placeholder="Ingresa un nombre"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Descripcion</label>
                            <input
                                type="text"
                                placeholder="Ingresa una descripcion"
                            />
                        </div>

                        <div className="form-group">
                            <label>Fecha de inicio</label>
                            <input
                                type="Date"
                                placeholder=""
                            />
                        </div>

                        <div className="form-group">
                            <label>Fecha de fin</label>
                            <input
                                type="Date"
                                placeholder="Ingresa tu correo"
                            />
                        </div>

                        <div className="form-group">
                            <label>Equipo responsable</label>
                            <input
                                type="text"
                                placeholder="Nombre del equipo"
                            />
                        </div>

                        <button type="submit" className="form-button" onClick={closeModal}>
                            Enviar
                        </button>
                    </form>

                </ModalAddProyectos>

                <ModalUpdateProyectos isOpen={isModalOpen2} onClose={closeModal2}>
                    <h2>Actualizar el proyecto</h2>

                    <form className="form" >
                        <div className="form-group">
                            <label>Nombre del proyecto</label>
                            <input
                                type="text"
                                placeholder="Ingresa un nombre"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Descripcion</label>
                            <input
                                type="text"
                                placeholder="Ingresa una descripcion"
                            />
                        </div>

                        <div className="form-group">
                            <label>Fecha de inicio</label>
                            <input
                                type="Date"
                                placeholder=""
                            />
                        </div>

                        <div className="form-group">
                            <label>Fecha de fin</label>
                            <input
                                type="Date"
                                placeholder="Ingresa tu correo"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Estatus</label>
                            <input
                                type="text"
                                placeholder="Estatus"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Equipo responsable</label>
                            <input
                                type="text"
                                placeholder="Nombre del equipo"
                            />
                        </div>

                        <button type="submit" className="form-button" onClick={closeModal2}>
                            Enviar
                        </button>
                    </form>

                </ModalUpdateProyectos>


                {/*Seccion de la tabla*/}
                <div className='table-div'>
                    <table className='table-structure'>
                        <thead>
                            <tr>
                                <th>Nombre de <br></br> proyecto</th>
                                <th>Descripcion</th>
                                <th>Fecha <br></br>de inicio</th>
                                <th>Fecha <br></br>de fin</th>
                                <th>Estatus</th>
                                <th>Equipo <br></br> responsable</th>
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
                                <td><BsTrash className='actions icons-pointer' size="2rem" color='red' />
                                    <BsPencilSquare onClick={openModal2} className='icons-pointer' size="2rem" color='green' />
                                </td>
                            </tr>
                            <tr>
                                <td>Hola</td>
                                <td>Hola</td>
                                <td>Hola</td>
                                <td>Hola</td>
                                <td>Hola</td>
                                <td>Hola</td>
                                <td><BsTrash className='actions icons-pointer' size="2rem" color='red' />
                                    <BsPencilSquare className='icons-pointer' size="2rem" color='green' /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </main>
        </div>
    )
}

export default Proyectos