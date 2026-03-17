import styled from "styled-components";
import type { ButtonProps } from "./types";

export const variantStyles = {
  primary: `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
  `,
  secondary: `
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
    color: #667eea;
    border: none;
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #e8ecf0 0%, #d4d9e0 100%);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.15);
    }
    
    &:active:not(:disabled) {
      background: linear-gradient(135deg, #d4d9e0 0%, #c0c6d0 100%);
    }
  `,
  danger: `
    background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
    color: white;
    border: none;
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%);
      box-shadow: 0 5px 15px rgba(229, 62, 62, 0.4);
    }
  `,
  success: `
    background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
    color: white;
    border: none;
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
      box-shadow: 0 5px 15px rgba(72, 187, 120, 0.4);
    }
  `,
  warning: `
    background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%);
    color: white;
    border: none;
    
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #dd6b20 0%, #c05621 100%);
      box-shadow: 0 5px 15px rgba(237, 137, 54, 0.4);
    }
  `,
}

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
