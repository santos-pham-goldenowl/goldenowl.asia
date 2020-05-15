import axios from 'axios'

console.log(process.env.REACT_APP_API_URL)

export const getAllBlogs = () => axios.get('/get-blogs')