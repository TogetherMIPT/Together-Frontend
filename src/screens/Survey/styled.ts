import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f3f4f6;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

export const ContentWrapper = styled.div`
  background-color: #ffffff;
  padding: 20px;
  
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #6b7280;
  text-align: center;
  margin-bottom: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const QuestionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const QuestionText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
`;

export const OptionsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

// Динамические стили для кнопки опции
export const OptionButton = styled.button<{ $isActive: boolean; $activeColor?: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  border-radius: 12px;
  border: 2px solid ${(props) => (props.$isActive ? props.$activeColor : '#e5e7eb')};
  background-color: ${(props) => (props.$isActive ? '#f9fafb' : 'transparent')};
  cursor: pointer;
  transition: all 0.2s ease;
  transform: ${(props) => (props.$isActive ? 'scale(1.05)' : 'scale(1)')};
  box-shadow: ${(props) => (props.$isActive ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none')};

  &:hover {
    border-color: ${(props) => props.$activeColor};
  }
`;

export const OptionLabel = styled.span<{ $isActive: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.$isActive ? '#1f2937' : '#6b7280')};
  margin-top: 8px;
`;
