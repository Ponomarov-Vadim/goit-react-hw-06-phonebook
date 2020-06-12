import { connect } from "react-redux";
import ContactForm from "../../components/ContactForm";

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps, null)(ContactForm);
