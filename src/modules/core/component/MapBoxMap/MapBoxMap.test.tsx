import * as React from "react";
import { shallow } from "enzyme";
import MapBoxMap from "./MapBoxMap";

describe("MapBoxMap", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MapBoxMap />);
    expect(wrapper).toMatchSnapshot();
  });
});
