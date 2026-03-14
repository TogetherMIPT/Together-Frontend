import type { FC } from "react";
import { Loader } from "../Loader";
import { StyledButton } from "./styled";
import type { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({ children, isLoading, variant = 'primary', ...props }) => {
  return (
    <StyledButton variant={variant} disabled={isLoading} {...props}>
      {isLoading && <Loader />}
      {children}
    </StyledButton>
  );
};