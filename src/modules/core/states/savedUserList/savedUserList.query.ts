import { Query } from "@datorama/akita";
import { SavedUsers } from "../../models/interfaces/savedUser.interface";
import { savedUsersStore, SavedUsersStore } from "./savedUserList.store";

export class SavedUsersQuery extends Query<SavedUsers> {
    constructor(protected store: SavedUsersStore) {
        super(store);
    }
    getSavedUserList = () => {
        return this.getValue().savedUsers;
    }
}

export const savedUsersQuery = new SavedUsersQuery(savedUsersStore);