import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { useCoreService } from "./modules/core/services/Core.service";
// import "antd/dist/antd.less";
// import "mapbox-gl/dist/mapbox-gl.css";
// import "maplibre-gl/dist/maplibre-gl.css";
import "antd/dist/antd.css";
import { getDefaultSettings } from "http2";
import { isDate } from "util/types";
import { useState } from "react";
import { Divider, Modal } from "antd";
import Input from "antd/lib/input/Input";
import Example from "./Example";

function App() {
  const coreService = useCoreService();
  coreService?.setUpApplication();

  return (
    <>
      {/* <Example /> */}
      <AppRoutes />
    </>
  );
}

export default App;

// return <AppRoutes />;
