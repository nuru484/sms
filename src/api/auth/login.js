import { api } from '..';

const login = async (credentials) => {
  return await api.post('/auth/login', credentials);
};

export default login;
