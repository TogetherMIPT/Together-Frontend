import type { TFormData } from "../types/app/loginFormData";
import type { TLoginResponse } from "../types/loginResponse";
import api from "../utils/api";

export const login = (credentials: TFormData) => {
  return api.post<TLoginResponse>('/api/login', credentials);
}
