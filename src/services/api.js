// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/forms';

export const submitFormData = async (formData) => {
  const response = await axios.post(`${API_URL}/submit`, formData);
  return response.data;
};


