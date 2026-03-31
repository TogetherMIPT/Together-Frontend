import { useState, type ChangeEventHandler, type SubmitEventHandler } from 'react';
import { ErrorMessage, Form, Success } from "./styled";
import { useRegister } from '../../../../hooks/data/useRegister';
import type { TRegistrationFormData } from '../../../../types/app/registrationFormData';
import { Button } from '../../../../components/Button';
import { FormInput } from '../../../../components/FormInput';
import { ConsentCheckbox } from './components/ConsentCheckbox';
import type { AxiosError } from 'axios';
import { validatePassword } from './utils/validatePassword';

const initialState = {
    login: '',
    password: '',
    confirmPassword: '',
    agreeToPrivacy: false,
  };

type TExtendedRegisterFormData = TRegistrationFormData & { confirmPassword: string; agreeToPrivacy: boolean; }
type TExtendedRegisterFormErrors = TRegistrationFormData & { confirmPassword: string; agreeToPrivacy: string; }

const parseRegisterError = (error: AxiosError | null) => {
  if (!error) {
    return;
  }

  switch (error.status) {
    case 409:
      return 'Такой пользователь уже существует!';
    default:
      return 'Произошла ошибка!';
  }
}

export const RegisterForm = () => {
  const [formData, setFormData] = useState<TExtendedRegisterFormData>(initialState);
  const [errors, setErrors] = useState<Partial<TExtendedRegisterFormErrors>>({});
  const { mutateAsync: register, isSuccess, isPending, error } = useRegister();

  const registrationError = parseRegisterError(error);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: Partial<TExtendedRegisterFormErrors> = {};

    if (!formData.login.trim()) {
      newErrors.login = 'Login обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.login)) {
      newErrors.login = 'Неверный формат login';
    }

    if (!formData.password) {
      
      newErrors.password = 'Пароль обязателен';
    } else {
      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        newErrors.password = passwordError
      }
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }
    
    if (!formData.agreeToPrivacy) {
      newErrors.agreeToPrivacy = 'Необходимо согласиться с политикой конфиденциальности';
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

    
    // Здесь будет ваш код для отправки данных на сервер
    await register(formData);

    // Очистка формы после успешной отправки
    setFormData({
      login: '',
      password: '',
      confirmPassword: '',
      agreeToPrivacy: false
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {isSuccess && <Success>Регистрация выполнена успешно!</Success>}

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

      <FormInput
        label="Повторите пароль"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Повторите пароль"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        error={errors.confirmPassword}
      />

      <ConsentCheckbox
        value={formData.agreeToPrivacy}
        onChange={handleChange}
        error={errors.agreeToPrivacy}
      />

      <Button type="submit" isLoading={isPending} disabled={!formData.agreeToPrivacy}>Зарегистрироваться</Button>

      {error && <ErrorMessage>{registrationError}</ErrorMessage>}
    </Form>
  );
};
