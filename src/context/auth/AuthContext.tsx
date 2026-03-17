import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { authStorage } from '../../utils/auth';

interface IAuthContext {
  userId?: number;
  setUserId: Dispatch<SetStateAction<number | undefined>>;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
}

const initialValue: IAuthContext = {
  isAuthenticated: false,
  setUserId: () => {},
  setIsAuthenticated: () => {},
}

const AuthContext = createContext<IAuthContext>(initialValue);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const user_id = authStorage.getUserId();
  const [userId, setUserId] = useState<number | undefined>(user_id ? +user_id : undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Восстановление сессии при загрузке
  useEffect(() => {
    const user_id = authStorage.getUserId();
    
    if (user_id) {
      setUserId(+user_id);
      setIsAuthenticated(true);
    }
  }, []);

  const value = useMemo(() => ({
    userId,
    isAuthenticated,
    setIsAuthenticated,
    setUserId,
  }), [userId, isAuthenticated, setUserId, setIsAuthenticated]);

  return (
    <AuthContext.Provider value={value}>
      {children}
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