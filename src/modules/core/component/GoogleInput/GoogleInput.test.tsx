import * as React from "react";
import { shallow } from "enzyme";
import GoogleInput from "./GoogleInput";

describe("GoogleInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GoogleInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
