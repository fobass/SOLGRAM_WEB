import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins',
    headers: {
        "Content-type": "application/json"
    }
})

export default apiClient