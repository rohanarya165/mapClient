import { message } from "antd";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../../core/states/auth";
import {
  clientUsersQuery,
  clientUsersStore,
} from "../../../core/states/clientListData";
import {
  savedUsersQuery,
  savedUsersStore,
} from "../../../core/states/savedUserList";
import { userStore } from "../../../core/states/user";
import CreateNewPassword from "../../presentation/CreateNewPassword";

type CreateNewPasswordContainerProps = {
  //
};

const CreateNewPasswordContainer: React.FC<
  CreateNewPasswordContainerProps
> = () => {
  let navigate = useNavigate();
  const savedUserList = savedUsersQuery.getSavedUserList();
  const listData = clientUsersQuery.getClientUserList();
  const newlistData = [...listData];
  const newSvedData = [...savedUserList];

  const logOut = () => {
    authStore.update({
      isAuthenticated: false,
    });
    console.log(authStore);
  };

  const passwordChange = (data: any) => {
    authStore.update({
      password: data.confirmPassword,
    });
    userStore.update({
      password: data.confirmPassword,
    });

    let newDataList = newlistData.map((item) => {
      if (data.CurrentEmail === item.email) {
        console.log("confirm", data.confirmPassword);
        return { ...item, password: data.confirmPassword };
      } else {
        return "";
      }
    });
    let UndefinedClient = newDataList.filter(function (element: any) {
      return element !== undefined;
    });

    UndefinedClient.forEach((element: any) => {
      const itemIndex = newlistData.findIndex((o) => o.id === element.id);
      if (itemIndex > -1) {
        newlistData[itemIndex] = element;
      } else {
        //
      }
    });

    clientUsersStore.update({ clientUsers: newlistData });

    let newSavedDataList = newSvedData.map((item) => {
      if (data.CurrentEmail === item.email) {
        return { ...item, password: data.confirmPassword };
      } else {
        return "";
      }
    });
    let UndefinedSaved = newSavedDataList.filter(function (element: any) {
      return element !== undefined;
    });

    UndefinedSaved.forEach((element: any) => {
      const itemIndex = newSvedData.findIndex((o) => o.id === element.id);
      if (itemIndex > -1) {
        newSvedData[itemIndex] = element;
      } else {
        //
      }
    });

    savedUsersStore.update({ savedUsers: newSvedData });
    message.success("Your Password has been changed Successfully 👍 ");
    logOut();
    navigate("/login");
  };

  return <CreateNewPassword passwordChange={passwordChange} />;
};

export default CreateNewPasswordContainer;
