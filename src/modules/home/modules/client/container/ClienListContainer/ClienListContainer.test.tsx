import * as React from "react";
import { shallow } from "enzyme";
import ClienListContainer from "./ClienListContainer";

describe("ClienListContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClienListContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
