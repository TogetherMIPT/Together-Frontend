export const TOKEN_KEY = 'access_token';
export const USER_ID = 'user_id';
export const REFRESH_TOKEN_KEY = 'refresh_token';

export const authStorage = {
  getToken: () => localStorage.getItem(TOKEN_KEY),
  setToken: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  removeToken: () => localStorage.removeItem(TOKEN_KEY),

  getUserId: () => localStorage.getItem(USER_ID),
  setUserId: (userId: number) => localStorage.setItem(USER_ID, userId.toString()),
  removeUserId: () => localStorage.removeItem(USER_ID),
  
  getRefreshToken: () => localStorage.getItem(REFRESH_TOKEN_KEY),
  setRefreshToken: (token: string) => localStorage.setItem(REFRESH_TOKEN_KEY, token),
  removeRefreshToken: () => localStorage.removeItem(REFRESH_TOKEN_KEY),
  
  clear: () => {
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
};