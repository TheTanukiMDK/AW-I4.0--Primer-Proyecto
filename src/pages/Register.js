import React, { useState } from 'react';
import '../styles/Register.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        const re = /^[A-Za-z0-9!@#$%^&*()_+=-]*$/;
        return re.test(String(password)) && password.length >= 8;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            alert('Por favor, rellena todos los campos');
            return;
        }

        if (!validateEmail(email)) {
            alert('Correo electrónico no válido');
            return;
        }

        if (!validatePassword(password)) {
            alert('La contraseña debe tener al menos 8 caracteres y solo puede contener letras, números y caracteres especiales !@#$%^&*()_+=-');
            return;
        }

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
                        <input
                            type='text'
                            placeholder='Ingresa correo electronico'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='input-box'>
                        <input
                            type='password'
                            placeholder='Ingresa contraseña'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='input-box'>
                        <input
                            type='password'
                            placeholder='Confirmar contraseña'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button className='button-1' type='submit'>Registrar</button>

                    <div className='register-link'>
                        <p>¿Ya tienes cuenta? <a href='/'>Inicia sesion</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;