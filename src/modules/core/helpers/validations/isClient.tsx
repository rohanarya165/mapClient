import { ROLE_TYPE } from "../../models/enums/core.enums";
import { userQuery } from "../../states/user";

export const isClient = () => {
  if (userQuery.getRole() === ROLE_TYPE.CLIENT) {
    return true;
  }
  return false;
};
