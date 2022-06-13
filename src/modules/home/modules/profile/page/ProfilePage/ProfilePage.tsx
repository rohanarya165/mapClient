import * as React from "react";
import { isClient } from "../../../../../core/helpers/validations/isClient";
import ClientProfileContainer from "../../container/ClientProfileContainer";

type ProfilePageProps = {
  //
};

const ProfilePage: React.FC<ProfilePageProps> = () => {
  return isClient() ? (
    <ClientProfileContainer></ClientProfileContainer>
  ) : (
    <h1> Invalid User </h1>
  );
};

export default ProfilePage;
