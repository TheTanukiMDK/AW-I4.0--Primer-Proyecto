import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const GoogleLoginButton = () => {
    const responseGoogle = (response) => {
        const decoded = jwt_decode(response.credential);
        console.log(decoded);

        // Aquí puedes enviar la información al backend para verificar o crear el usuario
        fetch('http://localhost:5000/api/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: response.credential }),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // Guardar el token en el localStorage o en el estado de la aplicación
        })
        .catch(err => console.error(err));
    };

    return (
        <GoogleOAuthProvider clientId="628372787749-0g10ignu8s0fkq1715side4fetaosno0.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={responseGoogle}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;