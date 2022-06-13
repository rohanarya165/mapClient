import * as React from "react";
import { shallow } from "enzyme";
import ClientMapPage from "./ClientMapPage";

describe("ClientMapPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClientMapPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
