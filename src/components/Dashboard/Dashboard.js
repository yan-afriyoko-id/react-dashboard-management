'use client';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import DashboardStats from './DashboardStats';
import SiswaTable from './SiswaTable';
import HobbyTable from './HobbyTable';
import UserTable from './UserTable';
import ProfileForm from './ProfileForm';
import { authService } from '../../services/api';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/';
        return;
      }

      const response = await authService.getCurrentUser();
      setUser(response.data);
    } catch (error) {
      console.error('Auth error:', error);
      localStorage.removeItem('token');
      window.location.href = '/';
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Selamat datang di Sistem Manajemen Siswa</p>
            </div>
            <DashboardStats />
          </div>
        );
      case 'siswa':
        return <SiswaTable />;
      case 'hobby':
        return <HobbyTable />;
      case 'users':
        return <UserTable />;
      case 'profile':
        return <ProfileForm />;
      default:
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Selamat datang di Sistem Manajemen Siswa</p>
            </div>
            <DashboardStats />
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex min-h-screen " >
        {/* Sidebar */}
        <Sidebar 
          activeMenu={activeMenu} 
          onMenuChange={setActiveMenu} 
          user={user} 
        />
        
        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Mobile header */}
          <div className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold text-gray-900">Siswa Management</h1>
            </div>
          </div>
          
          {/* Content */}
          <main className="p-4 lg:p-8">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
} 