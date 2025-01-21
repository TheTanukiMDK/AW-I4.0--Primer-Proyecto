import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import "../styles/Dashboard.css";
import "../styles/Equipos.css"
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import ModalAddProyectos from '../components/ModalAddEquipos';
import ModalUpdateProyectos from '../components/ModalUpdateEquipos';

function Cronograma() {
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
                    <h1>Cronograma</h1>
                </header>
                <div className='button-container'>
                    <button className='button-proyects' onClick={openModal}>Agregar asignacion</button>
                </div>
                {/*Seccion del modal*/}
                <ModalAddProyectos isOpen={isModalOpen} onClose={closeModal}>
                    <h2>Agregar Equipo</h2>

                    <form className="form" >
                        <div className="form-group">
                            <label>Nombre del proyecto</label>
                            <select>
                              <option>
                                Equipo 1
                              </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Nombre del Miembro</label>
                            <select>
                              <option>
                                Ricardo
                              </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Actividad</label>
                            <input
                                type="text"
                                placeholder="Ingresa un nombre"
                            />
                        </div>

                        <div className="form-group">
                            <label>Fecha inicio</label>
                            <input
                                type="date"
                                placeholder="Ingresa un nombre"
                            />
                        </div>

                        <div className="form-group">
                            <label>Fecha Fin</label>
                            <input
                                type="date"
                                placeholder="Ingresa un nombre"
                            />
                        </div>


                        <button type="submit" className="form-button" onClick={closeModal}>
                            Enviar
                        </button>
                    </form>

                </ModalAddProyectos>

                <ModalUpdateProyectos isOpen={isModalOpen2} onClose={closeModal2}>
                    <h2>Actualizar el Equipo</h2>

                    <form className="form" >
                    <div className="form-group">
                            <label>Nombre del proyecto</label>
                            <select>
                              <option>
                                Equipo 1
                              </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Nombre del Miembro</label>
                            <select>
                              <option>
                                Ricardo
                              </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Actividad</label>
                            <input
                                type="text"
                                placeholder="Ingresa un nombre"
                            />
                        </div>

                        <div className="form-group">
                            <label>Fecha inicio</label>
                            <input
                                type="date"
                                placeholder="Ingresa un nombre"
                            />
                        </div>

                        <div className="form-group">
                            <label>Fecha Fin</label>
                            <input
                                type="date"
                                placeholder="Ingresa un nombre"
                            />
                        </div>
                        <div className="form-group">
                            <label>Estatus</label>
                            <select>
                              <option>
                                En desarrollo
                              </option>
                            </select>
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
                                <th>Nombre del <br></br> Proyecto</th>
                                <th>Nombre del <br></br> Miembro</th>
                                <th>Actividad</th>
                                <th>Fecha inicio</th>
                                <th>Fecha Fin</th>
                                <th>Estatus</th>
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

export default Cronograma