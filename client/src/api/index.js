import axios from 'axios'
import { SERVER_URL, TOKEN_KEY } from '../utils/constants'
import { getLocalStorage } from '../utils/local-storage'

export const apiClient = () => axios.create({
    baseURL: SERVER_URL,
    headers: {
        "Authorization": `Bearer ${getLocalStorage(TOKEN_KEY)}`
    }
})
