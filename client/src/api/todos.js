import axios from 'axios';
import { SERVER_URL } from '../utils/constants';

const prefix = 'todos';

export const getTodos = async () => axios.get(`${SERVER_URL}/${prefix}`)

export const updateTodo = async (id, data) => axios.put(`${SERVER_URL}/${prefix}/${id}`, data);

export const deleteTodo = async (id) => axios.delete(`${SERVER_URL}/${prefix}/${id}`);