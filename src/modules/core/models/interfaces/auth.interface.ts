export interface AuthDetails {
  accessToken: string;
  refreshToken: string;
  username: string;
  password: string;
  isAuthenticated: boolean;
  logger: Number;
}
