// API Configuration
export const API_BASE_URL = 'http://localhost:8000/api';

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  REGISTER: '/register',
  LOGIN: '/login',
  LOGOUT: '/logout',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  USER: '/user',
  SEND_VERIFICATION_EMAIL: '/send-verification-email',
  VERIFY_EMAIL: '/verify-email',
  RESEND_VERIFICATION: '/email/resend',
  
  // Siswa Management
  SISWA: '/siswa',
  
  // Hobby Management
  HOBBY: '/hobby',
  
  // Phone Management
  PHONE: '/phone',
  
  // User Management
  USERS: '/users',
  USERS_SEARCH: '/users/search',
  
  // Profile Management
  PROFILE: '/profile',
  PROFILE_CHANGE_PASSWORD: '/profile/change-password',
  PROFILE_STATISTICS: '/profile/statistics',
};

// Helper function to get full URL
export const getApiUrl = (endpoint) => `${API_BASE_URL}${endpoint}`;

// Helper function to get auth headers
export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}; 