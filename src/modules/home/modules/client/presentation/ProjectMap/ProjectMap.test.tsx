import * as React from "react";
import { shallow } from "enzyme";
import ProjectMap from "./ProjectMap";

describe("ProjectMap", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProjectMap />);
    expect(wrapper).toMatchSnapshot();
  });
});
