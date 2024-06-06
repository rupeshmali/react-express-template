import { apiClient } from ".";

const prefix = '/auth';

export const signup = async (data) => apiClient.post(`${prefix}/sign-up`, data)

export const login = async (data) => apiClient.post(`${prefix}/sign-in`, data)

export const getMe = async () => apiClient.get(`/users/me`)
   