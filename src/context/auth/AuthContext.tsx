import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { authStorage } from '../../utils/auth';
import { useAuth } from "../../hooks/data/useAuth";

interface IAuthContext {
  isLoading: boolean;
  userId?: number;
  setUserId: Dispatch<SetStateAction<number | undefined>>;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
}

const initialValue: IAuthContext = {
  isLoading: false,
  isAuthenticated: false,
  setUserId: () => {},
  setIsAuthenticated: () => {},
}

const AuthContext = createContext<IAuthContext>(initialValue);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userId, setUserId] = useState<number>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { mutateAsync, isPending } = useAuth();

  // Восстановление сессии при загрузке
  useEffect(() => {
    const initAuth = async () => {
      const token = authStorage.getToken();
      
      if (token) {
          // Проверяем валидность токена
          await mutateAsync();
      }
    };

    initAuth();
  }, []);

  const value = useMemo(() => ({
    userId,
    isAuthenticated,
    isLoading: isPending,
    setIsAuthenticated,
    setUserId,
  }), [userId, isAuthenticated, isPending, setUserId, setIsAuthenticated]);

  return (
    <AuthContext.Provider value={value}>
      {!isPending && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};