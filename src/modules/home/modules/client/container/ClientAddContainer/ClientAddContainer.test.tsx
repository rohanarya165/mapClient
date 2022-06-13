import * as React from "react";
import { shallow } from "enzyme";
import ClientAddContainer from "./ClientAddContainer";

describe("ClientAddContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClientAddContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
