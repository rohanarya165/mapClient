import { Form, Input } from "antd";
import * as React from "react";
import { render } from "react-dom";
import MapboxAutocomplete from "react-mapbox-autocomplete";

const mapAccess = {
  mapboxApiAccessToken:
    "pk.eyJ1Ijoiam9uc2VuIiwiYSI6IkR6UU9oMDQifQ.dymRIgqv-UV6oz0-HCFx1w",
};

function _suggestionSelect(result: any, lat: any, long: any, text: any) {
  console.log(result, lat, long, text);
}

function MapBoxAutocomplete() {
  return (
    <div className="App">
      <div>
        <MapboxAutocomplete
          publicKey={mapAccess.mapboxApiAccessToken}
          inputClass="form-control search"
          onSuggestionSelect={_suggestionSelect}
          country="in"
          resetSearch={false}
          placeholder="Search Address..."
        ></MapboxAutocomplete>
      </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);

export default MapBoxAutocomplete;

/* import * as React from "react";

type MapBoxAutocompleteProps = {
  //
};

const MapBoxAutocomplete: React.FC<any> = () => {
  return <div>MapBoxAutocomplete</div>;
};

export default MapBoxAutocomplete; */
