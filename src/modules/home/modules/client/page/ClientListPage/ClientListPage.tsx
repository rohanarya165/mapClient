import * as React from "react";
import { isAdmin } from "../../../../../core/helpers/validations/isAdmin";
import ClienListContainer from "../../container/ClienListContainer";

type ClientListPageProps = {
  //
};

const ClientListPage: React.FC<ClientListPageProps> = () => {
  return isAdmin() ? <ClienListContainer /> : <>In valid User</>;
};

export default ClientListPage;
