import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fb-mern-by-trs.herokuapp.com/'
});

export default instance;