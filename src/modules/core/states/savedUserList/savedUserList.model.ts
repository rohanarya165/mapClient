import { SavedUsers } from "../../models/interfaces/savedUser.interface";

export function createInitialSavedUsersState(): SavedUsers {
  return {
    savedUsers: [],
  };
}
