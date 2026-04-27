import styled from "styled-components";

export const ProfileContainer = styled.div`
  background: white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
  overflow: hidden;
`;

export const ProfileHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  text-align: center;
`;

export const ProfileTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const ProfileSubtitle = styled.p`
  opacity: 0.9;
  font-size: 14px;
  margin-top: 5px;
`;

export const ProfileBody = styled.div`
  padding: 40px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

export const Notification = styled.div<{ type: 'success' | 'error' }>`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 30px;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: translateX(400px);
  transition: transform 0.3s;
  z-index: 1000;
  background: ${(props) => (props.type === 'success' ? '#4CAF50' : '#f44336')};
  animation: slideIn 0.3s forwards, slideOut 0.3s 2.7s forwards;

  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    to {
      transform: translateX(400px);
    }
  }
`;

export const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
