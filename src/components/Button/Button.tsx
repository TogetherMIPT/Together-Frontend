import type { FC } from "react";
import { Loader } from "../Loader";
import { StyledButton } from "./styled";

export const Button: FC<ButtonProps> = ({ children, isLoading, ...props }) => {
  return (
    <StyledButton disabled={isLoading} {...props}>
      {isLoading && <Loader />}
      {children}
    </StyledButton>
  );
};