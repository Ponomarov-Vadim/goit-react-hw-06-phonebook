import { connect } from "react-redux";
import ContactList from "../../components/ContactList";
import { deleteContact } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  deleteContact: ({ target: { name } }) => dispatch(deleteContact(name)),
});

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  filter: state.contactsFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
