import * as React from "react";
import { Navigate } from "react-router-dom";
import { authQuery } from "../../states/auth";

const ProtectedRoute: React.FC<any> = (props) => {
  let isSignedIn = false;

  if (authQuery.isAuthenticated()) {
    isSignedIn = true;
  }

  return isSignedIn ? props.children : <Navigate to="/" />;
};

export default ProtectedRoute;
