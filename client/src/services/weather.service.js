import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const fetchWeather = async (city) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/weather/${encodeURIComponent(city)}`);
    if (!data.success) throw new Error(data.message);
    return data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || 'Failed to fetch weather.';
    throw new Error(message);
  }
};
