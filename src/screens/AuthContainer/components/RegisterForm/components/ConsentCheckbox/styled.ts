import styled from "styled-components";

export const ConsentWrapper = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  color: #333;
`;

export const ConsentLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-top: 3px;
  accent-color: #007bff;
  cursor: pointer;
  width: 16px;
  height: 16px;
`;

export const ConsentText = styled.span`
  line-height: 1.4;
`;

export const ConsentError = styled.div`
  color: #dc3545;
  font-size: 12px;
  margin-top: 4px;
  margin-left: 24px;
  font-weight: 500;
`;
