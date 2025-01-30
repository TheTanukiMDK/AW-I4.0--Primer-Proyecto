import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'; 
import DashboardAdmin from './pages/DashboardAdmin';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> {/* Añadir la ruta para Register */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute allowedRoles={['user', 'admin']}>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/dashboardAdmin"
                    element={
                        <ProtectedRoute allowedRoles={['admin']}>
                            <DashboardAdmin />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;