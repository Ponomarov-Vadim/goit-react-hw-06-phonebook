import { connect } from "react-redux";
import Filter from "../../components/Filter";
import { filter } from "../actions/";

const mapDispatchToProps = (dispatch) => ({
  contactsFilter: ({ target: { value } }) => dispatch(filter(value)),
});

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  filter: state.contactsFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
