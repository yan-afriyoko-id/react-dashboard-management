'use client';

import { useState, useEffect } from 'react';
import { siswaService, hobbyService, userService } from '../../services/api';

export default function DashboardStats() {
  const [stats, setStats] = useState({
    totalSiswa: 0,
    totalHobbies: 0,
    totalUsers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const [siswaResponse, hobbyResponse, userResponse] = await Promise.all([
        siswaService.getAll(),
        hobbyService.getAll(),
        userService.getAll(),
      ]);
      
      setStats({
        totalSiswa: siswaResponse.data?.length || 0,
        totalHobbies: hobbyResponse.data?.length || 0,
        totalUsers: userResponse.data?.total || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Siswa',
      value: stats.totalSiswa,
      icon: '👥',
      color: 'bg-blue-500',
      description: 'Jumlah siswa terdaftar',
    },
    {
      title: 'Total Hobi',
      value: stats.totalHobbies,
      icon: '🎯',
      color: 'bg-green-500',
      description: 'Jumlah hobi tersedia',
    },
    {
      title: 'Total User',
      value: stats.totalUsers,
      icon: '👤',
      color: 'bg-purple-500',
      description: 'Jumlah user terdaftar',
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white shadow rounded-lg p-6 animate-pulse">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
              <div className="ml-4 flex-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-6 bg-gray-300 rounded w-1/2 mt-2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statCards.map((stat, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className={`w-8 h-8 ${stat.color} rounded-full flex items-center justify-center`}>
                <span className="text-white text-lg">{stat.icon}</span>
              </div>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 