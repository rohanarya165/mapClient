import * as React from "react";
import { shallow } from "enzyme";
import ClientList from "./ClientList";

describe("ClientList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClientList />);
    expect(wrapper).toMatchSnapshot();
  });
});
