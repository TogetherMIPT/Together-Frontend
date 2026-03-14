import styled, { keyframes } from 'styled-components';
import type { SkeletonProps } from './types';

const shimmer = keyframes`
  0% { background-position: -100px 0; }
  100% { background-position: 100px 0; }
`;

export const SkeletonStyled = styled.div<SkeletonProps>`
  background-color: #e0e0e0;
  background-image: linear-gradient(90deg, #e0e0e0 0px, #f0f0f0 40px, #e0e0e0 80px);
  background-size: 600px;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: ${({ circle, borderRadius }) => (circle ? '50%' : borderRadius || '4px')};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '1em'};
  display: block;
`;
