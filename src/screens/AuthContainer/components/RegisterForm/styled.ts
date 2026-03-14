import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Success = styled.div`
  color: #27ae60;
  font-size: 0.85rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  &::before {
    content: '✅';
    margin-right: 5px;
  }
`;
