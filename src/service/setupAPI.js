import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081/',
    timeout: 5000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('Request sent:', config);
    return config;
}, function (error) {
    // Do something with request error
    console.error('Request error:', error);
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Do something with response data
    console.log('Response received:', response);
    return response;
}, function (error) {
    // Do something with response error
    console.error('Response error:', error);
    return Promise.reject(error);
});

export default axiosInstance;
