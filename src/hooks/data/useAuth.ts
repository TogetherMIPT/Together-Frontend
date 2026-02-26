import { useMutation } from "@tanstack/react-query"
import { auth } from "../../api/auth"
import type { AxiosResponse } from "axios"
import type { IClient } from "../../types/client"
import { authStorage } from "../../utils/auth"
import { useAuthContext } from "../../context/auth/AuthContext"

export const useAuth = () => {
  const { setUserId, setIsAuthenticated } = useAuthContext();

  return useMutation({
    mutationFn: auth,
    onSuccess: (res: AxiosResponse<IClient>) => {
      setUserId(res.data?.user_id);
      setIsAuthenticated(true);
    },
    onError: () => {
      authStorage.clear();
      setIsAuthenticated(false);
    }
  })
}
