import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import "../styles/Dashboard.css";
import "../styles/Equipos.css"
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import ModalAddProyectos from '../components/ModalAddEquipos';
import ModalUpdateProyectos from '../components/ModalUpdateEquipos';

function Equipos() {
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
                    <h1>Lista de equipos</h1>
                </header>
                <div className='button-container'>
                    <a className='button-proyects' href='/Miembros'>Ver Miembros</a>
                    <button className='button-proyects' onClick={openModal}>Nuevo Equipo</button>
                </div>
                {/*Seccion del modal*/}
                <ModalAddProyectos isOpen={isModalOpen} onClose={closeModal}>
                    <h2>Agregar Equipo</h2>

                    <form className="form" >
                        <div className="form-group">
                            <label>Nombre del equipo</label>
                            <input
                                type="text"
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
                            <label>Nombre del Equipo</label>
                            <input
                                type="text"
                                placeholder="Ingresa un nombre"
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
                                <th>Nombre de <br></br> equipo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hola</td>
                                <td><BsTrash className='actions icons-pointer' size="2rem" color='red' />
                                    <BsPencilSquare onClick={openModal2} className='icons-pointer' size="2rem" color='green' />
                                </td>
                            </tr>
                            <tr>
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

export default Equipos