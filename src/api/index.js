import axios from 'axios';

class APIError extends Error {
  constructor(message, status, type, details = null) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.type = type;
    this.details = details;
  }
}

const serverURL = import.meta.env.VITE_SERVER_URL;

const api = axios.create({
  baseURL: `${serverURL}/api/v1`,
  timeout: 10000, // Set a default timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Automatically parse JSON responses
    return response.data;
  },

  async (error) => {
    if (error.response) {
      // Server-side error
      const { data, status } = error.response;
      const message = data.message || 'An error occurred';
      const type = data.type || 'UNKNOWN_ERROR';
      const details = data.errors || null;

      if (status === 400 || status === 422) {
        throw new APIError(message, status, 'VALIDATION_ERROR', details);
      }

      throw new APIError(message, status, type);
    } else if (error.request) {
      // Network error
      throw new APIError('Network error', 0, 'NETWORK_ERROR');
    } else if (error.message === 'canceled') {
      // Request aborted
      throw new APIError('Request was aborted', 0, 'ABORT_ERROR');
    }

    throw new APIError('An unexpected error occurred', 0, 'UNEXPECTED_ERROR');
  }
);

export { api, APIError };
