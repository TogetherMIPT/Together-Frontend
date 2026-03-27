import type { FC } from 'react';
import styled from 'styled-components';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

const StyledSvg = styled.svg<IconProps>`
  width: ${({ size }) => size || 24}px;
  height: ${({ size }) => size || 24}px;
  fill: none;
  stroke: ${({ color }) => color || 'currentColor'};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const Graph: FC<IconProps> = ({ 
  size = 24, 
  color, 
  className 
}) => (
  <StyledSvg 
    size={size} 
    color={color} 
    className={className}
    viewBox="0 0 24 24"
  >
    {/* Оси графика */}
    <line x1="3" y1="21" x2="21" y2="21" />
    <line x1="3" y1="21" x2="3" y2="3" />
    
    {/* Столбцы гистограммы */}
    <rect x="6" y="15" width="3" height="6" />
    <rect x="11" y="11" width="3" height="10" />
    <rect x="16" y="7" width="3" height="14" />
    
    {/* Линия тренда с точками */}
    <circle cx="7.5" cy="13" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="12.5" cy="9" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="17.5" cy="5" r="1.5" fill="currentColor" stroke="none" />
    <line x1="7.5" y1="13" x2="12.5" y2="9" />
    <line x1="12.5" y1="9" x2="17.5" y2="5" />
  </StyledSvg>
);
