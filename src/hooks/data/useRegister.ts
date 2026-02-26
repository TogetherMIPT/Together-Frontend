import { useMutation, type DefaultError } from "@tanstack/react-query"
import { register } from "../../api/register"
import type { AxiosResponse } from "axios"
import type { IClient } from "../../types/client"
import type { TFormData } from "../../types/app/loginFormData"
import { useAuthContext } from "../../context/auth/AuthContext"
import { authStorage } from "../../utils/auth"

export const useRegister = () => {
    const { setUserId, setIsAuthenticated } = useAuthContext();
    
  return useMutation<AxiosResponse<IClient>,DefaultError, TFormData>({
    mutationFn: register,
    onSuccess: (res) => {
      const { accessToken, refreshToken, user } = res.data;

      authStorage.setToken(accessToken);
      authStorage.setRefreshToken(refreshToken);
      setUserId(user.user_id);
      setIsAuthenticated(true);
      
      return user;
    }
  })
}
