import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verificar si los campos están vacíos o contienen solo espacios
        if (!email.trim() || !password.trim()) {
            alert('Por favor, rellena todos los campos sin espacios en blanco');
            return;
        }

        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email.trim(), password: password.trim() }),
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
                    <h1>Iniciar sesión</h1>
                    <div className='input-box'>
                        <input
                            type='text'
                            placeholder='Correo electrónico'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-box'>
                        <input
                            type='password'
                            placeholder='Contraseña'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit'>Ingresar</button>

                    <div className='register-link'>
                        <p>¿No tienes cuenta? <a href='/Registro'>Regístrate</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;