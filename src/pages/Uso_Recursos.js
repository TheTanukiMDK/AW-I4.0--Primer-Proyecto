import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import "../styles/Dashboard.css";
import "../styles/Equipos.css"
import { BsTrash } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import ModalUpdateProyectos from '../components/ModalUpdateProyectos';

function Uso_Recursos() {

  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);
  return (
    <div className='dashboard'>
      <Sidebar />
      <main className="main-content">
        <header className="header">
          <h1>Uso de los recursos</h1>
        </header>
        <div className='button-container'>
        <a className='button-proyects' href='/Recursos'>Ver Lista de recursos</a>
        </div>

        <ModalUpdateProyectos isOpen={isModalOpen2} onClose={closeModal2}>
          <h2>Actualizar Su uso</h2>

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
              <label htmlFor="email">Fecha de uso</label>
              <input
                type="date"
                placeholder=""
              />
            </div>

            <div className="form-group">
              <label>Cantidad Usada</label>
              <input
                type="number"
                placeholder="Ingrese la cantidad"
              />
            </div>

            <div className="form-group">
              <label>Observaciones</label>
              <textarea
                type="text"
                placeholder="Ingresa observaciones"
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
                <th>Fecha de uso</th>
                <th>Cantidad usada</th>
                <th>Observaciones</th>
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

export default Uso_Recursos