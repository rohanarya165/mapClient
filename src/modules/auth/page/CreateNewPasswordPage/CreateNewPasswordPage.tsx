import React from "react";
import { useNavigate } from "react-router-dom";
import { authQuery } from "../../../core/states/auth";
import CreateNewPasswordContainer from "../../container/CreateNewPasswordContainer";

const CreateNewPasswordPage: React.FC = () => {
  let navigate = useNavigate();
  React.useEffect(() => {
    if (authQuery.isAuthenticated()) {
      navigate("/createNewPassword");
    } else {
      navigate("/home/client/map");
    }
  }, []);

  return <CreateNewPasswordContainer></CreateNewPasswordContainer>;
};

export default CreateNewPasswordPage;
