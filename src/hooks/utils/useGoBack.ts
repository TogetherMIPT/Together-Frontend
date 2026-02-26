import { useNavigate } from "react-router";
import { useCallback } from "react";

export const useGoBack = () => {
  const navigate = useNavigate();

  return useCallback(() => {
    navigate(-1);
  }, [])
}