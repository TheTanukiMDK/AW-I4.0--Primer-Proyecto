// components/Register.js
import React, { useState } from 'react';
import '../styles/Register.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const res = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
            alert('Usuario registrado con éxito');
            window.location.href = '/';
        } else {
            alert(data.message);
        }
    };

    return (
        <div className='fondo'>
            <div className='wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Registro</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Ingresa correo electronico' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Ingresa contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Confirmar contraseña' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button type='submit'>Registrar</button>

                    <div className='register-link'>
                        <p>¿Ya tienes cuenta? <a href='/'>Inicia sesion</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;