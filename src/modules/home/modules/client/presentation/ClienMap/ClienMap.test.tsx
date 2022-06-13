import * as React from "react";
import { shallow } from "enzyme";
import ClienMap from "./ClienMap";

describe("ClienMap", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClienMap />);
    expect(wrapper).toMatchSnapshot();
  });
});
