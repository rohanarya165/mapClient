import * as React from "react";
import { shallow } from "enzyme";
import AdminProfile from "./AdminProfile";

describe("AdminProfile", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdminProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
