import axios from 'axios'

export const getAllBlogs = () => axios.get('/get-blogs')