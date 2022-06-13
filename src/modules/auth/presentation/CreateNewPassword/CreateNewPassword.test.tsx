import * as React from "react";
import { shallow } from "enzyme";
import CreateNewPassword from "./CreateNewPassword";

describe("CreateNewPassword", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreateNewPassword passwordChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
