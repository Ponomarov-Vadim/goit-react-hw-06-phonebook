import { CONTACTS_FILTER } from "../actions";

const filter = (state = "", action) => {
  switch (action.type) {
    case CONTACTS_FILTER:
      return action.filter;

    default:
      return state;
  }
};

export default filter;
