import { shallow } from "enzyme";
import * as React from "react";
import SavedUserList from "./SavedUserList";

describe("SavedUserList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(
      <SavedUserList
        setLoginScreen={() => {}}
        onDeleteUser={() => {}}
        onAutoLogin={() => {}}
        savedUserList={""}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
