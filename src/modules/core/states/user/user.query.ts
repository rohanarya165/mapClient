import { Query } from "@datorama/akita";
import { UserDetails } from "../../models/interfaces/user.interface";
import { userStore, UserStore } from "./user.store";

export class UserQuery extends Query<UserDetails> {
  constructor(protected store: UserStore) {
    super(store);
  }

  getEmail = () => {
    return this.getValue().email;
  };
  getUserID = () => {
    return this.getValue().id;
  };
  getName = () => {
    return this.getValue().name;
  };
  getAddress = () => {
    return this.getValue().address;
  };
  getPassword = () => {
    return this.getValue().password;
  };
  getRole = () => {
    return this.getValue().role;
  };
  getStatus = () => {
    return this.getValue().status;
  };
}

export const userQuery = new UserQuery(userStore);
