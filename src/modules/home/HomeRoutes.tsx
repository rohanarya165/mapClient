import React from "react";
import { Route, Routes } from "react-router-dom";
import { Client } from "./modules/client/Client";
import { Profile } from "./modules/profile/Profile";

export const HomeRoutes = () => {
  const loaderSuspense = <React.Fragment></React.Fragment>;
  return (
    <React.Suspense fallback={loaderSuspense}>
      <Routes>
        <Route path={"/client/*"} element={<Client></Client>}></Route>
        <Route path={"/profile/*"} element={<Profile />}></Route>
      </Routes>
    </React.Suspense>
  );
};
