import styled from "styled-components";

export const StyledChatControls = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  flex-basis: 20px;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 1000;
`;

export const TrashIcon = styled.svg<{ disabled: boolean }>`
  width: 20px;
  height: 20px;
  stroke: ${({ disabled }) => (disabled ? '#ccc' : '#dc3545')};
  transition: stroke 0.3s ease;
`;
