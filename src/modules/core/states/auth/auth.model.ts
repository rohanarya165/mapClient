import { AuthDetails } from "../../models/interfaces/auth.interface";

export function createInitialAuthState(): AuthDetails {
  return {
    accessToken: "",
    refreshToken: "",
    username: "",
    password: "",
    isAuthenticated: false,
    logger: new Date().getTime(),
  };
}
