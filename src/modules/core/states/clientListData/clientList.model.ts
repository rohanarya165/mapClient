import { ClientUsers } from "../../models/interfaces/clientListData.interface";

export function createInitialClientUsersState(): ClientUsers {
  return {
    clientUsers: [],
  };
}
