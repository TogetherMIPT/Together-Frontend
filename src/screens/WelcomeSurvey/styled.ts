import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%; /* Было height: 100% */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Было center */
  overflow-y: auto;
  padding: 32px 0; /* Безопасные отступы сверху/снизу */
  background-color: rgba(255, 255, 255, 0.98);
  z-index: 9999;
  box-sizing: border-box;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 40px 24px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: auto;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 24px;
`;

export const QuestionLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 12px;
  color: #444;
  font-size: 1.05rem;
  line-height: 1.4;
`;

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const OptionItem = styled.label`
  display: flex;
  align-items: center;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background-color: #f8f9fa;
    border-color: #d0d0d0;
  }

  input {
    margin-right: 10px;
    transform: scale(1.1);
    cursor: pointer;
    accent-color: #007bff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
  min-height: 100px;
  font-size: 1rem;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
  }
`;
