export type TLoginResponse = {
  expires_at: string;
  login: string;
  message: string;
  token: string; // uuid
  user_id: number;
};
