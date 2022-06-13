import * as React from "react";
import { shallow } from "enzyme";
import AdminProfileContainer from "./AdminProfileContainer";

describe("AdminProfileContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdminProfileContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
