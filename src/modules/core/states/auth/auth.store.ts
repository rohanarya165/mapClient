import { Store, StoreConfig } from "@datorama/akita";
import { AuthDetails } from "../../models/interfaces/auth.interface";
import { createInitialAuthState } from "./auth.model";

@StoreConfig({ name: "auth", resettable: true })
export class AuthStore extends Store<AuthDetails> {
  constructor() {
    super(createInitialAuthState());
  }
}

export const authStore = new AuthStore();
