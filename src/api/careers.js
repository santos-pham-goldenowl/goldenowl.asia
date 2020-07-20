import axios from 'axios';

export const getAllCareers = () => axios.get('/get-careers');

export const getCareer = (jobSlug) => axios.get(`/get-career?slug=${jobSlug}`);

export const submitApplication = (data) => axios.post('/submit-application', data, {
  headers: { 'Content-Type': 'multipart/form-data' },
});
