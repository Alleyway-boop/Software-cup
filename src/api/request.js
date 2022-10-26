import axios from 'axios';

const request = axios.create({
    baseURL: '/api',
    //请求超时时间
    timeout: 5000
})

