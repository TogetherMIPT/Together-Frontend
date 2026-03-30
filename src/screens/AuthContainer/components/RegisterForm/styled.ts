import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Success = styled.div`
  color: #27ae60;
  font-size: 0.85rem;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  &::before {
    content: '✅';
    margin-right: 5px;
  }
`;

export const ErrorMessage = styled.div`
  color: #f43e3e;

  font-size: 0.85rem;
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;
