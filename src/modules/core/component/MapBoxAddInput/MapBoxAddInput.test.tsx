import * as React from "react";
import { shallow } from "enzyme";
import MapBoxAddInput from "./MapBoxAddInput";

describe("MapBoxAddInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MapBoxAddInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
