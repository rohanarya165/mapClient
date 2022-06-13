import { UserDetails } from "../../models/interfaces/user.interface";

export function createInitialUserState(): UserDetails {
  return {
    id: 0,
    email: "",
    password: "",
    name: "",
    address: "",
    role: "",
    status: false,
  };
}
