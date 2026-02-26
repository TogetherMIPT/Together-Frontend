import styled from "styled-components";

export const FormGroup = styled.div`
  margin-bottom: 25px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 14px;
`;

export const FormControl = styled.input<{ disabled?: boolean }>`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s;
  background-color: ${(props) => (props.disabled ? '#f5f5f5' : 'white')};
  cursor: ${(props) => (props.disabled ? 'pointer' : 'auto')};

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;
