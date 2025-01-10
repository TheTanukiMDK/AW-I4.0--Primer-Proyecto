import React from 'react'
import '../styles/Register.css'


function Register() {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Registro</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Ingresa correo electronico'></input>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Ingresa contraseña'></input>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Confirmar contraseña'></input>
                </div>
                <button type='submit'>Registrar</button>

                <div className='register-link'>
                    <p>¿Ya tienes cuenta? <a href='/'>Inicia sesion</a></p>
                </div>
            </form>
        </div>
    )
}

export default Register
