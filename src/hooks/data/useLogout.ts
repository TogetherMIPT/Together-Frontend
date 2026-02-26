import { useMutation } from "@tanstack/react-query";
import { logout } from "../../api/logout";
import { useAuthContext } from "../../context/auth/AuthContext";
import { authStorage } from "../../utils/auth";

export const useLogout = () => {
  const { setUserId, setIsAuthenticated } = useAuthContext();
  return useMutation({
    mutationFn: () => {
      authStorage.clear();
      setUserId(undefined);
      setIsAuthenticated(false);
      return logout();
    },
  });
}