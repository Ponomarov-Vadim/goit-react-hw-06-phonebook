import React from "react";
import styled from "./Filter.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import popTransition from "../../transitions/pop.module.css";
import { filter } from "../../Redux/actions";

import { connect } from "react-redux";

const Filter = ({ contactsFilter, contacts, filter }) => (
  <CSSTransition
    in={contacts.length > 1}
    timeout={250}
    classNames={popTransition}
    unmountOnExit
  >
    <div className={styled.filter}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        className={classNames(styled.input)}
        onChange={contactsFilter}
        value={filter}
      />
    </div>
  </CSSTransition>
);

Filter.propTypes = {
  contactsFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

const mapDispatchToProps = (dispatch) => ({
  contactsFilter: ({ target: { value } }) => dispatch(filter(value)),
});

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  filter: state.contactsFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
