import * as React from "react";
import {
  clientUsersQuery,
  clientUsersStore,
} from "../../../../../core/states/clientListData";
import ClientAdd from "../../presentation/ClientAdd";

type ClientAddContainerProps = {
  //
};

const ClientAddContainer: React.FC<ClientAddContainerProps> = () => {
  const listData = clientUsersQuery.getClientUserList();
  const clientlistData: any[] = [...listData];

  let addClient = (data: any) => {
    let ClientId: number = Math.floor(Math.random() * 10000) + 1;
    data.id = ClientId;
    clientlistData.push(data);
    clientUsersStore.update({ clientUsers: clientlistData });
    console.log("container", listData);
  };

  return <ClientAdd addClient={addClient} />;
};

export default ClientAddContainer;
