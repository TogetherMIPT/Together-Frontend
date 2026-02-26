import { useState, type ChangeEventHandler, type SubmitEventHandler } from 'react';
import { Button, Error, Form, FormGroup, Input, Label, Success } from "./styled";
import { useRegister } from '../../../../hooks/data/useRegister';
import type { TRegistrationFormData } from '../../../../types/app/registrationFormData';

type TExtendedRegisterFormData = TRegistrationFormData & { confirmPassword: string }

export const RegisterForm = () => {
  const [formData, setFormData] = useState<TExtendedRegisterFormData>({
    login: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Partial<TExtendedRegisterFormData>>({});
  const { mutateAsync: register, isSuccess } = useRegister();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: Partial<TExtendedRegisterFormData> = {};

    if (!formData.login.trim()) {
      newErrors.login = 'Login обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.login)) {
      newErrors.login = 'Неверный формат login';
    }

    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
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
      confirmPassword: ''
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {isSuccess && <Success>Регистрация выполнена успешно!</Success>}

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="login"
          name="login"
          placeholder="Введите ваш login"
          value={formData.login}
          onChange={handleChange}
          required
        />
        {errors.login && <Error>{errors.login}</Error>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Пароль</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Введите пароль"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <Error>{errors.password}</Error>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Повторите пароль"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
      </FormGroup>

      <Button type="submit">Зарегистрироваться</Button>
    </Form>
  );
};
