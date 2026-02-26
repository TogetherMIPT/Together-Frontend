import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormGroup = styled.div`
  margin-bottom: 20px;
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;
export const Button = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;
export const Error = styled.div`
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 5px;
  display: flex;
  align-items: center;

  &::before {
    content: '⚠️';
    margin-right: 5px;
  }
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
