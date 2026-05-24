import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://tourgooo.onrender.com/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor để thêm Token vào Header cho mỗi yêu cầu
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;