import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router';
import { auth, provider, signInWithPopup } from '../database/firebaseConfig';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Aquí puedes manejar la información del usuario (user)
            // y redirigir según tus necesidades, por ejemplo:
            if (user) {
                // Guardar el token y el rol en el almacenamiento local
                localStorage.setItem('token', await user.getIdToken());
                localStorage.setItem('role', 'user'); // Ajusta esto según tu lógica de roles

                // Redirigir al dashboard
                navigate('/Dashboard');
            }
        } catch (error) {
            console.error("Error al iniciar sesión con Google:", error);
            alert("Error al iniciar sesión con Google");
        }
    };

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
            // Guardar el token y el rol en el almacenamiento local
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);

            // Redirigir según el rol del usuario
            if (data.role === 'admin') {
                navigate('/DashboardAdmin');
            } else {
                navigate('/Dashboard');
            }
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
                    <button className='button-1' type='submit'>Ingresar</button>
                    <button className='google-btn' type='button' onClick={handleGoogleLogin}>
                        Iniciar sesión con Google
                    </button>

                    <div className='register-link'>
                        <p>¿No tienes cuenta? <a href='/Registro'>Regístrate</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;