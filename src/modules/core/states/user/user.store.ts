import { Store, StoreConfig } from "@datorama/akita";
import { UserDetails } from "../../models/interfaces/user.interface";
import { createInitialUserState } from "./user.model";

@StoreConfig({ name: "user", resettable: true })
export class UserStore extends Store<UserDetails> {
  constructor() {
    super(createInitialUserState());
  }
}

export const userStore = new UserStore();
