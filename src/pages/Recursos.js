import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import "../styles/Dashboard.css";
import "../styles/Equipos.css"
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import ModalAddProyectos from '../components/ModalAddProyectos';
import ModalUpdateProyectos from '../components/ModalUpdateProyectos';

function Recursos() {
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
          <h1>Lista de recursos</h1>
        </header>
        <div className='button-container'>
          <a className='button-proyects' href='/UsoRecursos'>Uso de los recursos</a>
          <button className='button-proyects' onClick={openModal}>Agregar Recurso</button>
        </div>
        {/*Seccion del modal*/}
        <ModalAddProyectos isOpen={isModalOpen} onClose={closeModal}>
          <h2>Agregar Recurso</h2>

          <form className="form" >
            <div className="form-group">
              <label>Nombre del recurso</label>
              <input
                type="text"
                placeholder="Ingresa un nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Tipo de recurso</label>
              <input
                type="text"
                placeholder="Ingresa el tipo de recurso"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Descripcion</label>
              <textarea
                type="text"
                placeholder="Ingresa una descripcion"
              />
            </div>

            <div className="form-group">
              <label>Coste unitario</label>
              <input
                type="text"
                placeholder="Ingrese el coste"
              />
            </div>

            <div className="form-group">
              <label>Proyecto asignado</label>
              <input
                type="text"
                placeholder="Ingresa el proyecto asignado"
              />
            </div>

            <button type="submit" className="form-button" onClick={closeModal}>
              Enviar
            </button>
          </form>

        </ModalAddProyectos>

        <ModalUpdateProyectos isOpen={isModalOpen2} onClose={closeModal2}>
          <h2>Actualizar Recurso</h2>

          <form className="form" >
            <div className="form-group">
              <label>Nombre del recurso</label>
              <input
                type="text"
                placeholder="Ingresa un nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Tipo de recurso</label>
              <input
                type="text"
                placeholder="Ingresa el tipo de recurso"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Descripcion</label>
              <textarea
                type="text"
                placeholder="Ingresa una descripcion"
              />
            </div>

            <div className="form-group">
              <label>Coste unitario</label>
              <input
                type="text"
                placeholder="Ingrese el coste"
              />
            </div>

            <div className="form-group">
              <label>Proyecto asignado</label>
              <input
                type="text"
                placeholder="Ingresa el proyecto asignado"
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
                <th>Nombre de <br></br> Recurso</th>
                <th>Tipo Recurso</th>
                <th>Descripcion</th>
                <th>Coste unitario</th>
                <th>Proyecto Asignado</th>
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

export default Recursos