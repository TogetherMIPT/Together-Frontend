import { type FC } from "react";
import { StyledChatControls } from "./styled";
import { Text } from "../Text";
import { useGoBack } from "../../hooks/utils/useGoBack";

export const BackButton: FC = () => {
  const goBack = useGoBack();

  return <StyledChatControls onClick={goBack}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15 18 9 12 15 6" />
    </svg>
    <Text>Назад</Text>
  </StyledChatControls>
}