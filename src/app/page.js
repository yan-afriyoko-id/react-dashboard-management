'use client';

import { useState, useEffect } from 'react';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';
import Dashboard from '../components/Dashboard/Dashboard';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleSwitchToRegister = () => {
    setShowLogin(false);
  };

  const handleSwitchToLogin = () => {
    setShowLogin(true);
  };

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <div>
      {showLogin ? (
        <LoginForm 
          onSuccess={handleAuthSuccess} 
          onSwitchToRegister={handleSwitchToRegister}
        />
      ) : (
        <RegisterForm 
          onSuccess={handleAuthSuccess} 
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}
    </div>
  );
}
