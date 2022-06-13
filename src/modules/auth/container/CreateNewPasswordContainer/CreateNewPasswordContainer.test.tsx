import { shallow } from "enzyme";
import CreateNewPasswordContainer from "./CreateNewPasswordContainer";

describe("CreateNewPasswordContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreateNewPasswordContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
