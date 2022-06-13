import * as React from "react";
import { shallow } from "enzyme";
import ClientMapContainer from "./ClientMapContainer";

describe("ClientMapContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClientMapContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
