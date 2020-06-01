import axios from 'axios'

export const subcribe = (data) => axios.post("/subcribe", data);
