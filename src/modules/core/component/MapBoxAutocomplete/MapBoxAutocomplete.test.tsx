import * as React from "react";
import { shallow } from "enzyme";
import MapBoxAutocomplete from "./MapBoxAutocomplete";

describe("MapBoxAutocomplete", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MapBoxAutocomplete />);
    expect(wrapper).toMatchSnapshot();
  });
});
