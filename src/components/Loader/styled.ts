import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const LoaderSvg = styled.svg`
  animation: ${rotate} 1s linear infinite;
  width: 20px;
  height: 20px;
  flex-shrink: 0; /* Чтобы спиннер не сжимался */
`;
