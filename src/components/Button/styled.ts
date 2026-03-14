import styled from "styled-components";
import type { ButtonProps } from "./types";

export const variantStyles = {
  primary: `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    &:hover:not(:disabled) {
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
  `,
  secondary: `
    background: transparent;
    color: #667eea;
    border: 2px solid #667eea;
    
    &:hover:not(:disabled) {
      background: rgba(102, 126, 234, 0.08);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.15);
    }
    
    &:active:not(:disabled) {
      background: rgba(102, 126, 234, 0.15);
    }
  `,
  danger: `
    background: #e53e3e;
    color: white;
    &:hover:not(:disabled) {
      background: #c53030;
      box-shadow: 0 5px 15px rgba(229, 62, 62, 0.4);
    }
  `,
  ghost: `
    background: transparent;
    color: #4a5568;
    border: none;
    &:hover:not(:disabled) {
      background: rgba(0,0,0,0.05);
    }
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  padding: 14px 20px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s, background 0.2s, color 0.2s;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 120px;

  /* Применяем стили варианта */
  ${({ variant = 'primary' }) => variantStyles[variant]}

  /* Общие интерактивные состояния */
  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  /* Состояние disabled */
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;
