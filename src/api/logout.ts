import api from "../utils/api";

export const logout = () => api.post('/auth/logout');