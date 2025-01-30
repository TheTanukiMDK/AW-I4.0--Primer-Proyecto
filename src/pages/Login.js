import React, { useState, useEffect } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Limpiar cualquier token antiguo
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }, []); // Dependencias vacías para ejecutar solo una vez

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);

            if (data.role === 'admin') {
                navigate('/DashboardAdmin');
            } else {
                navigate('/Dashboard');
            }
        } else {
            alert(data.message);
        }
    };

    const responseGoogle = (response) => {
        const decoded = jwtDecode(response.credential);
        console.log(decoded);

        fetch('http://localhost:3000/api/google-auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: response.credential }),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);

            if (data.role === 'admin') {
                navigate('/DashboardAdmin');
            } else {
                navigate('/Dashboard');
            }
        })
        .catch(err => console.error(err));
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
                    <GoogleOAuthProvider clientId="628372787749-0g10ignu8s0fkq1715side4fetaosno0.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={responseGoogle}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>

                    <div className='register-link'>
                        <p>¿No tienes cuenta? <a href='/Registro'>Regístrate</a></p> {/* Cambiar el href a '/Registro' */}
                    </div>

                   
                </form>
            </div>
        </div>
    );
}

export default Login;