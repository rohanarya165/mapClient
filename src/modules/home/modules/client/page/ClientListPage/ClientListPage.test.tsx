import * as React from "react";
import { shallow } from "enzyme";
import ClientListPage from "./ClientListPage";

describe("ClientListPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ClientListPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
