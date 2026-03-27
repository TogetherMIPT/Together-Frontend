import { type ChangeEventHandler, type SubmitEventHandler, useEffect, useState } from 'react';
import { Form, Success } from "./styled";
import { useLogin } from "../../../../hooks/data/useLogin";
import type { TFormData } from "../../../../types/app/loginFormData";
import { checkIsEmailValid } from "../../../../utils";
import { Button } from '../../../../components/Button';
import { FormInput } from '../../../../components/FormInput';
import { useAuthContext } from '../../../../context/auth/AuthContext';
import { useNavigate } from 'react-router';

export const LoginForm = () => {
  const { userId, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TFormData>({
    login: '',
    password: ''
  });
  const [errors, setErrors] = useState<Partial<TFormData>>({});
  const { mutateAsync, isSuccess, isPending } = useLogin();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: Partial<TFormData> = {};
    if (!formData.login.trim()) {
      newErrors.login = 'Login обязателен';
    } else if (checkIsEmailValid(formData.login)) {
      newErrors.login = 'Неверный формат email';
    }

    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    return newErrors;
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await mutateAsync(formData);

    setFormData({ login: '', password: '' });
  };

  useEffect(() => {
    if (isAuthenticated && userId) {
      navigate('/');
    }
  }, [userId, isAuthenticated])

  return (
    <Form onSubmit={handleSubmit}>
      {isSuccess && <Success>Вход выполнен успешно!</Success>}

      <FormInput
        label="Email"
        type="email"
        id="login"
        name="login"
        placeholder="Введите ваш email"
        value={formData.login}
        onChange={handleChange}
        required
        error={errors.login}
      />

      <FormInput
        label="Пароль"
        type="password"
        id="password"
        name="password"
        placeholder="Введите пароль"
        value={formData.password}
        onChange={handleChange}
        required
        error={errors.password}
      />

      <Button type="submit" isLoading={isPending}>Войти</Button>
    </Form>
  );
};
