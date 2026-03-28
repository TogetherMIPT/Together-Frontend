import styled from "styled-components";

export const PrivacyLink = styled.a`
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;
