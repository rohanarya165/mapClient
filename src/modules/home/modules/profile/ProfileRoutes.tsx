import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./page/ProfilePage";

export const ProfileRoutes = () => {
  const loaderSuspense = <React.Fragment></React.Fragment>;
  return (
    <React.Suspense fallback={loaderSuspense}>
      <Routes>
        <Route path={"/view"} element={<ProfilePage></ProfilePage>}></Route>
      </Routes>
    </React.Suspense>
  );
};
