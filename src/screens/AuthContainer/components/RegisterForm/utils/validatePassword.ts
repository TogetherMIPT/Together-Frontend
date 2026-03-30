export const validatePassword = (password: string): string | undefined => {
  if (password.length < 8) {
    return 'Пароль должен содержать не менее 8 символов';
  }

  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;
  const specialChars = '!@#$%^&*';

  for (const char of password) {
    if (char >= 'A' && char <= 'Z') hasUpper = true;
    else if (char >= 'a' && char <= 'z') hasLower = true;
    else if (char >= '0' && char <= '9') hasNumber = true;
    else if (specialChars.includes(char)) hasSpecial = true;
  }

  if (!hasUpper) return 'Пароль должен содержать хотя бы одну заглавную букву (A-Z)';
  if (!hasLower) return 'Пароль должен содержать хотя бы одну строчную букву (a-z)';
  if (!hasNumber) return 'Пароль должен содержать хотя бы одну цифру (0-9)';
  if (!hasSpecial) return 'Пароль должен содержать хотя бы один спецсимвол (!@#$%^&*)';
};
