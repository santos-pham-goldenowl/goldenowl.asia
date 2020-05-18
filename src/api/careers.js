import axios from 'axios'

export const getAllCareers = () => axios.get('/get-careers')

export const getCareer = (jobId) => axios.get(`/get-career?id=${jobId}`)