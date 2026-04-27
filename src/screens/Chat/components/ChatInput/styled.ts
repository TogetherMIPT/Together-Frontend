import styled from "styled-components";

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const MessageInput = styled.textarea`
  flex: 1;
  border: none;
  border-radius: 20px;
  padding: 12px 20px;
  font-size: 15px;
  line-height: 1.4;
  resize: none;
  min-height: 44px;
  max-height: 150px;
  outline: none;
  background-color: #f5f5f5;
  transition: background-color 0.2s ease;

  &:focus {
    background-color: #ffffff;
    box-shadow: 0 0 0 2px rgba(0, 132, 255, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const SendButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${props => (props.disabled ? '#e0e0e0' : '#0084ff')};
  color: white;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    background-color: ${props => (props.disabled ? '#e0e0e0' : '#0066cc')};
    transform: scale(1.05);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
