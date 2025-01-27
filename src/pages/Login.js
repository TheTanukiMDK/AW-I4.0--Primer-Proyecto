// components/Login.js
import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
            // Guardar el token en el almacenamiento local
            localStorage.setItem('token', data.token);
            navigate('/Dashboard');
        } else {
            alert(data.message);
        }
    };

    return (
        <div className='fondo'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Iniciar sesion</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Correo electronico' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type='submit'>Ingresar</button>

                    <div className='register-link'>
                        <p>¿No tienes cuenta? <a href='/Registro'>Registrate</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;