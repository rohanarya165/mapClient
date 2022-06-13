import { message } from "antd";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ROLE_TYPE } from "../../../core/models/enums/core.enums";
import { authStore } from "../../../core/states/auth";
import { clientUsersQuery } from "../../../core/states/clientListData";
import {
  savedUsersQuery,
  savedUsersStore,
} from "../../../core/states/savedUserList";
import { userStore } from "../../../core/states/user";
import Login from "../../presentation/Login";
import SavedUserList from "../../presentation/SavedUserList";

type LoginContainerProps = {
  //
};

const LoginContainer: React.FC<LoginContainerProps> = () => {
  let navigate = useNavigate();
  const listData = clientUsersQuery.getClientUserList();
  const [loginScreen, setLoginScreen] = React.useState(true);
  const [savedUserList, setSavedUserList] = React.useState(
    savedUsersQuery.getSavedUserList()
  );

  React.useEffect(() => {
    if (savedUserList.length > 0) {
      setLoginScreen(false);
    } else {
      setLoginScreen(true);
    }
  }, [savedUserList]);

  const handleOnSubmit = (data: any, checkValue: boolean) => {
    const key = "update";
    message.loading({ content: "Logging...", key });

    listData.forEach((item) => {
      if (data.email === item.email && data.password === item.password) {
        authStore.update({
          username: data.email,
          password: data.password,
          isAuthenticated: true,
        });
        userStore.update({
          id: item.id,
          email: item.email,
          password: item.password,
          name: item.name,
          address: item.address,
          status: item.status,
          role: ROLE_TYPE.CLIENT,
        });

        message.success({ content: "Logged In Successfully", key });
        navigate("/home/client/map");
      }
    });

    if (data.email === "rohan@arya.com" && data.password === "Arya@2022") {
      authStore.update({
        username: data.email,
        password: data.password,
        isAuthenticated: true,
      });
      userStore.update({
        id: 1,
        email: "rohan@arya.com",
        password: "Arya@2022",
        name: "Rohan",
        address: "Nakoda nagar Khandwa",
        status: true,
        role: ROLE_TYPE.ADMIN,
      });
      message.success({ content: "Logged In Successfully", key });
      navigate("/home/client/map");
    } else {
      // message.error("wrong credentials");
    }

    if (checkValue) {
      let isUserAvailable = savedUserList.filter((user: any) => {
        if (user.email === data.email) {
          return true;
        } else {
          return false;
        }
      });
      if (isUserAvailable.length === 0) {
        let user: any = [{ email: data.email, password: data.password }];
        let updatedUserList: any = savedUserList.concat(user);
        savedUsersStore.update({ savedUsers: updatedUserList });
      }
    }
  };

  const autoLogin = (user: any) => {
    let userData = { email: user.email, password: user.password };
    handleOnSubmit(userData, false);
  };

  const deleteUser = (user: any) => {
    let copy = [...savedUserList];
    let userIndex = copy.findIndex((item) => {
      return user.email === item.email;
    });
    copy.splice(userIndex, 1);
    savedUsersStore.update({ savedUsers: copy });
    setSavedUserList(copy);
  };

  return (
    <React.Fragment>
      {loginScreen ? (
        <Login onSubmit={handleOnSubmit}></Login>
      ) : (
        <SavedUserList
          setLoginScreen={setLoginScreen}
          onDeleteUser={deleteUser}
          onAutoLogin={autoLogin}
          savedUserList={savedUserList}
        />
      )}
    </React.Fragment>
  );
};

export default LoginContainer;
