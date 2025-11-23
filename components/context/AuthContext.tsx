import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useMemo, useState } from "react";

interface IAuthContextValue {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const initialValue: IAuthContextValue = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
}

export const AuthContext = createContext<IAuthContextValue>(initialValue);

export const useAuthContext = () => useContext<IAuthContextValue>(AuthContext);

export const AuthContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value: IAuthContextValue = useMemo(() => ({
    isLoggedIn,
    setIsLoggedIn
  }), [isLoggedIn, setIsLoggedIn]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}