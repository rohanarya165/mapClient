import * as React from "react";
import { useNavigate } from "react-router-dom";
import { authQuery } from "../../../core/states/auth";
import LoginContainer from "../../container/LoginContainer";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<LoginPageProps> = () => {
  let navigate = useNavigate();

  React.useEffect(() => {
    if (authQuery.isAuthenticated()) {
      navigate("/home/client/map");
    }
  }, []);

  return <LoginContainer></LoginContainer>;
};

export default LoginPage;
