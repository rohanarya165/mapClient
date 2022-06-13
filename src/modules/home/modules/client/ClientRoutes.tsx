import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ClientAddPage from "./page/ClientAddPage";
import ClientListPage from "./page/ClientListPage";
import ClientMapPage from "./page/ClientMapPage";

export const ClientRoutes = () => {
  const loaderSuspense = <React.Fragment></React.Fragment>;
  return (
    <React.Suspense fallback={loaderSuspense}>
      <Routes>
        <Route
          path={"/list"}
          element={<ClientListPage></ClientListPage>}
        ></Route>
        <Route path={"/map"} element={<ClientMapPage></ClientMapPage>}></Route>
        <Route path={"/add"} element={<ClientAddPage></ClientAddPage>}></Route>
        <Route path={"/"} element={<Navigate to={"/map"} />}></Route>
      </Routes>
    </React.Suspense>
  );
};
