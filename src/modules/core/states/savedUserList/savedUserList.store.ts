import { arrayAdd, Store, StoreConfig } from "@datorama/akita";
import { SavedUser, SavedUsers } from "../../models/interfaces/savedUser.interface";
import { createInitialSavedUsersState } from "./savedUserList.model";

@StoreConfig({ name: 'savedUsers', resettable: true })
export class SavedUsersStore extends Store<SavedUsers> {

    constructor() {
        super(createInitialSavedUsersState());
    }
    addUser(data: SavedUser) {
        this.update(({ savedUsers }) => ({
            savedUsers: arrayAdd(savedUsers, data)
        }));
    }
}

export const savedUsersStore = new SavedUsersStore();