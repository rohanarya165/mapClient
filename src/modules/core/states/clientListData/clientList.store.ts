import { arrayAdd, Store, StoreConfig } from "@datorama/akita";
import {
  ClientUser,
  ClientUsers,
} from "../../models/interfaces/clientListData.interface";
import { createInitialClientUsersState } from "./clientList.model";

@StoreConfig({ name: "clientListData", resettable: true })
export class ClientUsersStore extends Store<ClientUsers> {
  constructor() {
    super(createInitialClientUsersState());
  }
  addUser(data: ClientUser) {
    this.update(({ clientUsers }) => ({
      clientUsers: arrayAdd(clientUsers, data),
    }));
  }
}

export const clientUsersStore = new ClientUsersStore();
