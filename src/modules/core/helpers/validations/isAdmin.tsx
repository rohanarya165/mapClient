import { ROLE_TYPE } from "../../models/enums/core.enums";
import { userQuery } from "../../states/user";

export const isAdmin = () => {
  if (userQuery.getRole() === ROLE_TYPE.ADMIN) {
    return true;
  }
  return false;
};
