import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';  
import ProtectedRoute from './ProtectedRoute';
import NavbarComponent from './NavbarComponent';

function App() {
  return (
    <Router>
       <NavbarComponent /> {/* ✅ Show on all pages */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
          <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
