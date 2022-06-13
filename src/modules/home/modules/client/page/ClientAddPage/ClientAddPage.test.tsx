import * as React from "react";
import { shallow } from "enzyme";
import ClientAddPage from "./ClientAddPage";

describe("ClientAddPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClientAddPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
