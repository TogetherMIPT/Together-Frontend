import styled, { keyframes, css } from "styled-components";

interface TooltipProps {
  $position: 'top' | 'bottom';
}

// Анимация пульсации
const pulse = keyframes`
  0% { 
    box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.7); 
  }
  70% { 
    box-shadow: 0 0 0 15px rgba(66, 153, 225, 0); 
  }
  100% { 
    box-shadow: 0 0 0 0 rgba(66, 153, 225, 0); 
  }
`;

// Анимация появления тултипа
const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateX(-50%) translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateX(-50%) translateY(0); 
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

interface ActionButtonProps {
  $isPulsing: boolean;
}

// ✅ Вариант 1: Тернарный оператор с явным возвратом пустой строки
export const ActionButton = styled.div<ActionButtonProps>`
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background-color: #f0f0f0;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #e0e0e0;
  }
  
  ${({ $isPulsing }) =>
    $isPulsing
      ? css`
          animation: ${pulse} 2s infinite;
        `
      : ''}
`;

export const Tooltip = styled.div<TooltipProps>`
  position: absolute;
  ${({ $position }) => $position === 'top' ? `
    bottom: calc(100% + 16px);  /* Увеличенный отступ */
    top: auto;
  ` : `
    top: calc(100% + 16px);  /* Увеличенный отступ */
    bottom: auto;
  `}
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  max-width: calc(100vw - 48px);  /* Больше отступов по краям */
  background: white;
  border-radius: 16px;  /* Более скругленные углы */
  padding: 20px;  /* Больше внутренних отступов */
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);  /* Мягкая тень */
  z-index: 1000;
  text-align: left;
  animation: ${fadeIn} 0.4s cubic-bezier(0.16, 1, 0.3, 1);  /* Плавная анимация */
  border: 1px solid rgba(0, 0, 0, 0.04);
  
  @media (max-width: 480px) {
    width: 260px;
    left: auto;
    right: -8px;
    transform: none;
  }
`;

export const TooltipClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background: #f5f5f5;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    background: #e0e0e0;
    color: #666;
  }
`;

export const TooltipContent = styled.div``;

export const TooltipTitle = styled.h4`
  margin: 0 0 12px 0;
  font-size: 18px;
  color: #1a1a1a;
  font-weight: 700;
  line-height: 1.3;
`;

export const TooltipText = styled.p`
  margin: 0 0 20px 0;
  font-size: 15px;
  color: #666;
  line-height: 1.5;
`;

export const TooltipAction = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);  /* Градиент как на кнопке */
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

interface ArrowProps {
  $position: 'top' | 'bottom';
}

export const TooltipArrow = styled.div<ArrowProps>`
  position: absolute;
  ${({ $position }) => $position === 'top' ? `
    top: 100%;
    border-color: white transparent transparent transparent;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.05));
  ` : `
    bottom: 100%;
    border-color: transparent transparent white transparent;
    filter: drop-shadow(2px 0 0 rgba(0, 0, 0, 0.05));
  `}
  left: 50%;
  margin-left: -8px;
  border-width: 8px;
  border-style: solid;
  
  @media (max-width: 480px) {
    left: auto;
    right: 24px;
    margin-left: 0;
  }
`;
