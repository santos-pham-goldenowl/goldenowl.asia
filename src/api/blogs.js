import axios from 'axios';

export const getAllBlogs = () => axios.get('/get-blogs');

export const getBlog = (blogSlug) => axios.get(`/get-blog?slug=${blogSlug}`);

export const searchListBlog = (valueSearch) => axios.get(`/search-list-blog?search=${valueSearch}`);

export const getListBlogCategory = () => axios.get('/get-list-blog-category');

export const getListBlogByCategory = (id) => axios.get(`get-list-blog-by-category?id=${id}`);
