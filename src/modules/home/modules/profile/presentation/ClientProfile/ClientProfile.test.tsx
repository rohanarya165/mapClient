import * as React from "react";
import { shallow } from "enzyme";
import ClientProfile from "./ClientProfile";

describe("ClientProfile", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClientProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
