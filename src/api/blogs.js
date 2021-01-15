import axios from 'axios';

export const getAllBlogs = (page) => axios.get(`/get-blogs?page=${page}`);

export const getBlog = (blogSlug) => axios.get(`/get-blog?slug=${blogSlug}`);

export const searchListBlog = (valueSearch, page) => axios.get(`/search-list-blog?search=${valueSearch}&page=${page}`);

export const getListBlogCategory = () => axios.get('/get-list-blog-category');

export const getListBlogByCategory = (id, page) => axios.get(`get-list-blog-by-category?id=${id}&page=${page}`);
