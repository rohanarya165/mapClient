import * as React from "react";
import { shallow } from "enzyme";
import ClientAdd from "./ClientAdd";

describe("ClientAdd", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClientAdd addClient={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
