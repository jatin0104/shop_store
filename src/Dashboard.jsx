import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <Container className="mt-5 text-center">
            <h1>Welcome, {user?.email}!</h1>
            <p>This is your dashboard.</p>
            <Button variant="danger" onClick={handleLogout}>
                Logout
            </Button>
        </Container>
    );
};

export default Dashboard;
