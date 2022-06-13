import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { useControl } from "react-map-gl";
import { createContext, useContext } from "react";

const MapBoxAddInput = () => {
  const initialState = {
    currentUser: null,
    openLogin: false,
    loading: false,
    alert: { open: false, severity: "info", message: "" },
    profile: { open: false, file: null, photoURL: "" },
    images: [],
    details: { title: "", description: "", price: 0 },
    location: { lng: 0, lat: 0 },
  };

  const Context = createContext(initialState);

  const useValue = () => {
    return useContext(Context);
  };

  const { dispatch }: any = useValue();

  const ctrl = new MapBoxGeocoder({
    accessToken:
      "pk.eyJ1Ijoicm9oYW5hcnlhOTMxIiwiYSI6ImNsM280azZsdjBqMnkzanBiZW91ZzNtdjgifQ.lsKFvdWCXblBUbjknzYp-Q",
    marker: false,
    collapsed: true,
  });

  useControl(() => ctrl);
  ctrl.on("result", (e) => {
    const coords = e.result.geometry.coordinates;
    dispatch({
      type: "UPDATE_LOCATION",
      payload: { lng: coords[0], lat: coords[1] },
    });
  });
  return null;
};

export default MapBoxAddInput;
