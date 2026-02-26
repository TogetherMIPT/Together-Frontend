import type { TFormData } from "../types/app/loginFormData";
import api from "../utils/api";

export const register = (userInfo: TFormData) => {
  return api.post<IClient>('/api/register', userInfo);
}
