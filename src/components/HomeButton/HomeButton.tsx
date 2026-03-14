import { type FC } from "react";
import { StyledChatControls } from "./styled";
import { useNavigate } from "react-router";

export const HomeButton: FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  }

  return <StyledChatControls onClick={goHome}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">  
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  </StyledChatControls>
}