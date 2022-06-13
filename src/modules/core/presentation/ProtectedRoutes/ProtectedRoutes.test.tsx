import * as React from "react";
import { shallow } from "enzyme";
import ProtectedRoutes from "./ProtectedRoutes";

describe("ProtectedRoutes", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProtectedRoutes />);
    expect(wrapper).toMatchSnapshot();
  });
});
