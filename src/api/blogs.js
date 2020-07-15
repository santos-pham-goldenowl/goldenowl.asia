import axios from 'axios';

export const getAllBlogs = () => axios.get('/get-blogs');

export const getBlog = (jobId) => axios.get(`/get-blog?id=${jobId}`);
