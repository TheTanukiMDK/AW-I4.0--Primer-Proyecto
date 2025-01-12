import React from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router';

function Login() {
    return (
        <body className='fondo'>
            <div className='wrapper'>
                <form action="">
                    <h1>Iniciar sesion</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Correo electronico'></input>
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Contraseña'></input>
                    </div>
                        <button type='submit'><a className='link' href='/Dashboard'>Ingresar</a></button>

                    <div className='register-link'>
                        <p>¿No tienes cuenta? <a href='/Registro'>Registrate</a></p>
                    </div>
                </form>
            </div>
        </body>
    )
}

export default Login
