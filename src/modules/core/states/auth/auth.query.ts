import { Query } from "@datorama/akita";
import { AuthDetails } from "../../models/interfaces/auth.interface";
import { authStore, AuthStore } from "./auth.store";

export class AuthQuery extends Query<AuthDetails> {
  constructor(protected store: AuthStore) {
    super(store);
  }
  getAuthentication$ = this.select("isAuthenticated");

  // getRefreshToekn$ = this.select('refreshToken');

  // getToekn$ = this.select('accessToken');

  isAuthenticated = () => {
    return this.getValue().isAuthenticated;
  };

  // getAuthenticationUser = () => {
  //     return this.getValue();
  // }
  // getToken = () => {
  //     return this.getValue().accessToken;
  // }

  getRefreshToken = () => {
    return this.getValue().refreshToken;
  };
  getPassword = () => {
    return this.getValue().password;
  };
  getUsername = () => {
    return this.getValue().username;
  };
  // getLogger = () => {
  //     return this.getValue().logger;
  // }
}

export const authQuery = new AuthQuery(authStore);
