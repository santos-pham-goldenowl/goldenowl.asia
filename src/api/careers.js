import axios from 'axios';

export const getAllCareers = () => axios.get('/get-careers');

export const getCareer = (jobId) => axios.get(`/get-career?id=${jobId}`);

export const submitApplication = (data) => axios.post('/submit-application', data, {
  headers: { 'Content-Type': 'multipart/form-data' },
});
