import { Navigate, useLocation } from 'react-router-dom';
import type { FC, PropsWithChildren } from 'react';
import { useAuthContext } from '../context/auth/AuthContext';

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuthContext();
  const location = useLocation();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
