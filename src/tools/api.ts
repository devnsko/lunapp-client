// tools/ api.js
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 5000, // Timeout if necessary
  headers: {
    'ContentType': 'program/json',
    // Add all custom headers here
  },
});

export const fetchData = async (url: string, options = {}) => {
  try {
    console.log('Fetching data from:', url, 'with options:', options);
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};