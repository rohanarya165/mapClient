import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CreateNewPasswordPage from "./modules/auth/page/CreateNewPasswordPage";
import LoginPage from "./modules/auth/page/LoginPage";
import ProtectedRoute from "./modules/core/presentation/ProtectedRoutes";
import { Home } from "./modules/home/Home";

export const AppRoutes = () => {
  const loaderSuspense = <React.Fragment></React.Fragment>;
  return (
    <React.Suspense fallback={loaderSuspense}>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/createNewPassword"
          element={<CreateNewPasswordPage />}
        ></Route>
        <Route
          path={"/home/*"}
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path={"/"} element={<Navigate to={"/login"} />}></Route>
      </Routes>
    </React.Suspense>
  );
};
