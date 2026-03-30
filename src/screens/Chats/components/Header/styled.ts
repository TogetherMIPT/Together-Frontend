import styled from "styled-components";

export const StyledWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  
  background-color: #ffffff;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  
  padding: 12px 16px;

  zIndex: 1000;
`

export const ActionsWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
