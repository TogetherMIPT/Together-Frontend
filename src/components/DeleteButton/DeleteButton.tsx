import { type FC, type MouseEventHandler } from "react";
import { StyledChatControls, TrashIcon } from "./styled";

interface IProps {
  onClick: () => void;
  disabled?: boolean;
}

export const DeleteButton: FC<IProps> = ({ onClick, disabled }) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    onClick();
  }
  
  return <StyledChatControls onClick={handleClick}>
    <TrashIcon
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      disabled={!!disabled}
    >
      {/* Крышка */}
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      {/* Линии на корпусе корзины */}
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </TrashIcon>
  </StyledChatControls>
}