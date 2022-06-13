import * as React from "react";
import { shallow } from "enzyme";
import ClientProfileContainer from "./ClientProfileContainer";

describe("ClientProfileContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClientProfileContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
