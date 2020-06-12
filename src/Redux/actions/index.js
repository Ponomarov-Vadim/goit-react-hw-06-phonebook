import { v4 } from "uuid";

export const CONTACTS_FILTER = "CONTACTS_FILTER";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  id: v4(),
  name,
  number,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  id,
});

export const filter = (filter) => ({
  type: CONTACTS_FILTER,
  filter,
});
