import { useMutation, type DefaultError } from "@tanstack/react-query"
import { register } from "../../api/register"
import type { AxiosError, AxiosResponse } from "axios"
import type { IClient } from "../../types/client"
import type { TFormData } from "../../types/app/loginFormData"
import { useAuthContext } from "../../context/auth/AuthContext"
import { authStorage } from "../../utils/auth"
import { useNavigate } from "react-router"

export const useRegister = () => {
  const navigate = useNavigate();
  const { setUserId, setIsAuthenticated } = useAuthContext();

  return useMutation<AxiosResponse<IClient>, AxiosError, TFormData>({
    mutationFn: register,
    onSuccess: (res) => {
      const { accessToken, refreshToken, user_id } = res.data;

      authStorage.setToken(accessToken);
      authStorage.setRefreshToken(refreshToken);
      setUserId(user_id);
      setIsAuthenticated(true);

      navigate('/login')
      
      return user_id;
    },
    onError: (error) => {
      console.log(error.cause)
      console.log(error.code)
      console.log(error.config)
      console.log(error.event)
      console.log(error.message)
      console.log(error.status)
    }
  })
}
