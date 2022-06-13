import { Input, Popover, Select } from "antd";
import mapboxgl from "mapbox-gl";
// import "./mapBoxMap.less";
// import "mapbox-gl/dist/mapbox-gl.css";
// import maplibregl from "maplibre-gl";
import * as React from "react";
import Map, { Layer, Marker, NavigationControl, Source } from "react-map-gl";
import { clientUsersQuery } from "../../states/clientListData";
import MapMarker from "../../../../assets/png/marker.png";

function MapBoxMap() {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoicm9oYW5hcnlhOTMxIiwiYSI6ImNsM280azZsdjBqMnkzanBiZW91ZzNtdjgifQ.lsKFvdWCXblBUbjknzYp-Q";
  const listData = clientUsersQuery.getClientUserList();
  let zoom = 12;
  let clientCoordinates: any = [];
  let clientFeatures: any = [];
  const { Option } = Select;
  const [isCustom, setIsCustom] = React.useState(false);
  const [mapTheme, setMapTheme] = React.useState(
    "mapbox://styles/mapbox/streets-v9"
  );

  let markerOfClients = listData.map((client) => {
    if (client.longitude !== undefined && client.status === true) {
      let lat = Number(client.latitude);
      let long = Number(client.longitude);
      let coordinates = [lat, long];
      let features = [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: coordinates,
          },
          properties: {
            title: client.name,
            description: client.address,
          },
        },
      ];
      clientFeatures.push(features);
      clientCoordinates.push(coordinates);
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });
      const content = (
        <div>
          <p>{client.email}</p>
          <p>{client.address}</p>
        </div>
      );
      return (
        <Marker
          longitude={long}
          latitude={lat}
          anchor="bottom"
          offset={[700, -500]}
          popup={popup}
        >
          <div className="marker temporary-marker">
            <span>
              <Popover content={content} title={client.name}>
                <img src={MapMarker} alt="" height={30} width={30} />
              </Popover>
            </span>
          </div>
        </Marker>
      );
    } else {
      return " ";
    }
  });

  var geojson: any = {
    type: "FeatureCollection",
    features: clientFeatures,
  };
  console.log("geojson", geojson);

  const layerStyle: any = {
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: clientCoordinates,
        },
      },
    },
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#ff0000",
      "line-width": 8,
    },
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    if (value === "light") {
      setMapTheme("mapbox://styles/mapbox/streets-v9");
      setIsCustom(false);
      return "mapbox://styles/mapbox/streets-v9";
    } else if (value === "dark") {
      setMapTheme("mapbox://styles/mapbox/dark-v9");
      setIsCustom(false);
      return "mapbox://styles/mapbox/dark-v9";
    } else {
      setIsCustom(true);
      return "";
    }
  };

  const customTheme = (e: any) => {
    console.log("e", e.target.value);
    return setMapTheme(e.target.value);
  };

  return (
    <>
      <div className="pb-2 flex">
        <Select
          defaultValue="light"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="dark">Dark</Option>
          <Option value="light">Light</Option>
          <Option value="custom">Custom</Option>
        </Select>
        {isCustom ? (
          <div className="flex mx-2 w-full">
            <a
              className="mx-2"
              href="https://docs.mapbox.com/help/tutorials/create-a-custom-style/"
              target="_blank"
              rel="noreferrer"
            >
              Click to create custom theme URL
            </a>
            <p className="mx-2">Enter custom map URL :</p>
            <Input
              style={{ width: "800px", height: "30px" }}
              onPressEnter={customTheme}
              placeholder="Map style URL"
            ></Input>

            {/* <input className="px-2" type="color" />
              <input className="px-2" type="color" />
              <input className="px-2" type="color" />
              <input className="px-2" type="color" /> */}
          </div>
        ) : (
          <></>
        )}
      </div>
      <Map
        mapboxAccessToken={mapboxgl.accessToken}
        initialViewState={{
          longitude: 75.85492350911471,
          latitude: 22.723181065586456,
          zoom: zoom,
        }}
        style={{ width: "100vw", height: "65vh" }}
        mapStyle={mapTheme}
        // mapLib={maplibregl}
      >
        {/* <NavigationControl /> */}
        {markerOfClients}
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </>
  );
}

export default MapBoxMap;
