import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 80px;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  background: white;
`;

export const AuthHeader = styled.div`
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AuthContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 30px;
`;

export const SwitchLink = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #666;
  font-size: 1rem;
`;

export const LinkStyled = styled(Link)`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: #764ba2;
  }
`;
