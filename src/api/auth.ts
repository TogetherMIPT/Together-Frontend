import api from "../utils/api";

export const auth = () => api.get('auth/me');
