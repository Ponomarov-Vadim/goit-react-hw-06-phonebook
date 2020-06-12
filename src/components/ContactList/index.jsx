import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import slideTransition from "../../transitions/slideFromLeft.module.css";

import styled from "./ContactList.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { save } from "../../services/localStorage";

const ContactList = ({ contacts, filter, deleteContact }) => {
  if (contacts.length) {
    save("contacts", contacts);
  }

  return (
    <TransitionGroup component="ul" className={styled.list}>
      {contacts.map((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ? (
          <CSSTransition
            key={contact.id}
            timeout={250}
            classNames={slideTransition}
          >
            <li className={classNames(styled.li)}>
              <span className={classNames(styled.span)}>
                {contact.name}: {contact.number}
              </span>
              <button
                name={contact.id}
                onClick={deleteContact}
                className={classNames(styled.button)}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ) : null
      )}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
