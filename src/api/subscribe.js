import axios from 'axios';

const subscribe = (data) => axios.post('/subscribe', data);

export default subscribe;