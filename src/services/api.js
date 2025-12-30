const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  getAuthToken() {
    return localStorage.getItem('token');
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = this.getAuthToken();

    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    };

    if (options.body && typeof options.body === 'object') {
      config.body = JSON.stringify(options.body);
    }

    try {
      const response = await fetch(url, config);
      
      // Handle empty responses
      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = { message: response.statusText };
      }

      if (!response.ok) {
        throw new Error(data.message || `Request failed: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth
  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: userData,
    });
  }

  async login(email, password) {
    return this.request('/auth/login', {
      method: 'POST',
      body: { email, password },
    });
  }

  // Payment
  async createPaymentOrder(plan, description) {
    return this.request('/payment/create-order', {
      method: 'POST',
      body: { plan, description },
    });
  }

  async verifyPayment(paymentData) {
    return this.request('/payment/verify', {
      method: 'POST',
      body: paymentData,
    });
  }

  // Memberships
  async getMemberships() {
    return this.request('/user/memberships');
  }

  async getActiveMembership() {
    return this.request('/user/memberships/active');
  }

  // Profile
  async getProfile() {
    return this.request('/user/profile');
  }

  async updateProfile(profileData) {
    return this.request('/user/profile', {
      method: 'PUT',
      body: profileData,
    });
  }

  // Analytics
  async trackEvent(category, action, label, userId = null, sessionId = null) {
    try {
      return await this.request('/analytics/track', {
        method: 'POST',
        body: {
          eventCategory: category,
          eventAction: action,
          eventLabel: label,
          userId,
          sessionId,
        },
      });
    } catch (error) {
      // Don't fail if analytics fails
      console.warn('Analytics tracking failed:', error);
      return null;
    }
  }

  // Public
  async getPlans() {
    return this.request('/public/plans');
  }
}

export default new ApiService();



