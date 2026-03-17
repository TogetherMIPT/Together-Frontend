import { Navigate, useLocation } from 'react-router-dom';
import { type FC, type PropsWithChildren } from 'react';
import { useAuthContext } from '../context/auth/AuthContext';

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { userId } = useAuthContext();
  const location = useLocation();

  if (!userId) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
