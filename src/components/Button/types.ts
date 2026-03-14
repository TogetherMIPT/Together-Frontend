import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { variantStyles } from './styled';

type ButtonVariant = keyof typeof variantStyles;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  isLoading?: boolean;
  variant?: ButtonVariant;
}