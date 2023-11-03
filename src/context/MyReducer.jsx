import { types } from "./types";

export const MyReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {};
    default:
      return state;
  }
};
