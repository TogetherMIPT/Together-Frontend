import { Route, Routes, useLocation, useNavigate } from "react-router";
import { AuthContainer } from "../screens/AuthContainer";
import { useAuthContext } from "../context/auth/AuthContext";
import { useEffect } from "react";

const authRoutes = ['/login', '/register', '/']

export const AuthRouter = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const { userId } = useAuthContext();

  useEffect(() => {
    if (!userId && !authRoutes.includes(location.pathname)) {
      navigate('/');
    }
  }, [userId, location])

  return <Routes>
    <Route path="/register" element={<AuthContainer active="register"/>}/>
    <Route path="/login" element={<AuthContainer active="login"/>}/>
    <Route path="/" element={<AuthContainer active="login"/>}/>
  </Routes>
}
