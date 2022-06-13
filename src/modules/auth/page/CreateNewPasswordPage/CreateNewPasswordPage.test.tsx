import React from "react";
import { shallow } from "enzyme";
import CreateNewPasswordPage from "./CreateNewPasswordPage";

describe("CreateNewPasswordPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreateNewPasswordPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
