import { useEffect } from "react";

import { useNavigate } from "react-router";

import { useAuthContext } from "../../../context/auth/AuthContext";

export const useRedirectIfAuthenticated = () => {
  const { userId, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
      if (isAuthenticated && userId) {
        navigate('/chats');
      }
    }, [userId, isAuthenticated]);
};
