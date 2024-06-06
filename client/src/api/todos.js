import { apiClient } from '.';

const prefix = '/todos';

export const getTodos = async () => apiClient().get(prefix)

export const updateTodo = async (id, data) => apiClient().put(`${prefix}/${id}`, data);

export const deleteTodo = async (id) => apiClient().delete(`${prefix}/${id}`);