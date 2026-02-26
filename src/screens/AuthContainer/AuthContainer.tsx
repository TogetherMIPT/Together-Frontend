import type { FC } from 'react';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { Container, AuthHeader, AuthContent, Title, LinkStyled, SwitchLink, Subtitle } from './styled';

interface IProps {
  active: 'login' | 'register';
}

export const AuthContainer: FC<IProps> = ({ active }) => {
  return (
    <Container>
      <AuthHeader>
        <Title>Together</Title>
        <Subtitle>
          {active === 'login'
            ? 'Войдите в свою учетную запись'
            : 'Создайте новую учетную запись'}
        </Subtitle>
      </AuthHeader>
      <AuthContent>
        {active === 'login' ? <LoginForm/> : <RegisterForm/>}
        <SwitchLink>
          {active === 'login' ? (
            <>
              Нет аккаунта? <LinkStyled to="/register">Зарегистрироваться</LinkStyled>
            </>
          ) : (
            <>
              Уже есть аккаунт? <LinkStyled to="/login">Войти</LinkStyled>
            </>
          )}
        </SwitchLink>
      </AuthContent>
    </Container>
  );
};
