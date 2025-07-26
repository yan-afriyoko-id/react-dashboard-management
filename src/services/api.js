import { getApiUrl, getAuthHeaders, API_ENDPOINTS } from '../config/api.js';

// Generic API call function
const apiCall = async (endpoint, options = {}) => {
  try {
    const url = getApiUrl(endpoint);
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Authentication Services
export const authService = {
  // Register
  register: async (userData) => {
    return apiCall(API_ENDPOINTS.REGISTER, {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Login
  login: async (credentials) => {
    const data = await apiCall(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    
    // Save token to localStorage
    if (data.data?.token) {
      localStorage.setItem('token', data.data.token);
    }
    
    return data;
  },

  // Logout
  logout: async () => {
    const data = await apiCall(API_ENDPOINTS.LOGOUT, {
      method: 'POST',
      headers: getAuthHeaders(),
    });
    
    // Remove token from localStorage
    localStorage.removeItem('token');
    
    return data;
  },

  // Forgot Password
  forgotPassword: async (email) => {
    return apiCall(API_ENDPOINTS.FORGOT_PASSWORD, {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  // Reset Password
  resetPassword: async (resetData) => {
    return apiCall(API_ENDPOINTS.RESET_PASSWORD, {
      method: 'POST',
      body: JSON.stringify(resetData),
    });
  },

  // Get Current User
  getCurrentUser: async () => {
    return apiCall(API_ENDPOINTS.USER, {
      headers: getAuthHeaders(),
    });
  },

  // Send Verification Email
  sendVerificationEmail: async () => {
    return apiCall(API_ENDPOINTS.SEND_VERIFICATION_EMAIL, {
      method: 'POST',
      headers: getAuthHeaders(),
    });
  },

  // Verify Email
  verifyEmail: async () => {
    return apiCall(API_ENDPOINTS.VERIFY_EMAIL, {
      method: 'POST',
      headers: getAuthHeaders(),
    });
  },

  // Resend Verification Email
  resendVerification: async () => {
    return apiCall(API_ENDPOINTS.RESEND_VERIFICATION, {
      method: 'POST',
      headers: getAuthHeaders(),
    });
  },
};

// Siswa Services
export const siswaService = {
  // Get All Students
  getAll: async () => {
    return apiCall(API_ENDPOINTS.SISWA, {
      headers: getAuthHeaders(),
    });
  },

  // Get Single Student
  getById: async (id) => {
    return apiCall(`${API_ENDPOINTS.SISWA}/${id}`, {
      headers: getAuthHeaders(),
    });
  },

  // Create Student
  create: async (siswaData) => {
    return apiCall(API_ENDPOINTS.SISWA, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(siswaData),
    });
  },

  // Update Student
  update: async (id, siswaData) => {
    return apiCall(`${API_ENDPOINTS.SISWA}/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(siswaData),
    });
  },

  // Delete Student
  delete: async (id) => {
    return apiCall(`${API_ENDPOINTS.SISWA}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
  },
};

// Hobby Services
export const hobbyService = {
  // Get All Hobbies
  getAll: async () => {
    return apiCall(API_ENDPOINTS.HOBBY, {
      headers: getAuthHeaders(),
    });
  },

  // Create Hobby
  create: async (hobbyData) => {
    return apiCall(API_ENDPOINTS.HOBBY, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(hobbyData),
    });
  },
};

// User Management Services
export const userService = {
  // Get All Users
  getAll: async (page = 1) => {
    return apiCall(`${API_ENDPOINTS.USERS}?page=${page}`, {
      headers: getAuthHeaders(),
    });
  },

  // Get Single User
  getById: async (id) => {
    return apiCall(`${API_ENDPOINTS.USERS}/${id}`, {
      headers: getAuthHeaders(),
    });
  },

  // Create User
  create: async (userData) => {
    return apiCall(API_ENDPOINTS.USERS, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(userData),
    });
  },

  // Update User
  update: async (id, userData) => {
    return apiCall(`${API_ENDPOINTS.USERS}/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(userData),
    });
  },

  // Delete User
  delete: async (id) => {
    return apiCall(`${API_ENDPOINTS.USERS}/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
  },

  // Search Users
  search: async (query) => {
    return apiCall(`${API_ENDPOINTS.USERS_SEARCH}?query=${query}`, {
      headers: getAuthHeaders(),
    });
  },
};

// Profile Services
export const profileService = {
  // Get Current User Profile
  get: async () => {
    return apiCall(API_ENDPOINTS.PROFILE, {
      headers: getAuthHeaders(),
    });
  },

  // Update Profile
  update: async (profileData) => {
    return apiCall(API_ENDPOINTS.PROFILE, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(profileData),
    });
  },

  // Change Password
  changePassword: async (passwordData) => {
    return apiCall(API_ENDPOINTS.PROFILE_CHANGE_PASSWORD, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(passwordData),
    });
  },

  // Delete Account
  delete: async (password) => {
    return apiCall(API_ENDPOINTS.PROFILE, {
      method: 'DELETE',
      headers: getAuthHeaders(),
      body: JSON.stringify({ password }),
    });
  },

  // Get Statistics
  getStatistics: async () => {
    return apiCall(API_ENDPOINTS.PROFILE_STATISTICS, {
      headers: getAuthHeaders(),
    });
  },
}; 