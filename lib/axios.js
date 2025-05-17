// lib/axios.js
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
})

export default axiosInstance
