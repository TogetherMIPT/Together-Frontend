import { useMutation } from "@tanstack/react-query";
import type { DefaultError } from "@tanstack/query-core";
import { useAuthContext } from "../../context/auth/AuthContext";
import type { TFormData } from "../../types/app/loginFormData";
import type { AxiosResponse } from "axios";
import { authStorage } from "../../utils/auth";
import { login } from "../../api/login";
import type { TLoginResponse } from "../../types/loginResponse";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const { setUserId, setIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  return useMutation<AxiosResponse<TLoginResponse>, DefaultError, TFormData>({
    mutationFn: login,
    onSuccess: (res: AxiosResponse<TLoginResponse>) => {
      const { user_id, token } = res.data;
          
      authStorage.setToken(token);
      setUserId(user_id);
      setIsAuthenticated(true);

      navigate('/chat/')
    }
  })
}