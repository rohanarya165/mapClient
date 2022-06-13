import { Query } from "@datorama/akita";
import { ClientUsers } from "../../models/interfaces/clientListData.interface";
import { clientUsersStore, ClientUsersStore } from "./clientList.store";

export class ClientUsersQuery extends Query<ClientUsers> {
  constructor(protected store: ClientUsersStore) {
    super(store);
  }
  getClientUserList = () => {
    return this.getValue().clientUsers;
  };
}

export const clientUsersQuery = new ClientUsersQuery(clientUsersStore);
