import axios from 'axios';

export const getAllBlogs = () => axios.get('/get-blogs');

export const getBlog = (blogSlug) => axios.get(`/get-blog?slug=${blogSlug}`);
