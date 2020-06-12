import React, { Component } from "react";

import Filter from "../Filter";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";

import { connect } from "react-redux";
import { addContact } from "../../Redux/actions";
import { load } from "../../services/localStorage";

class App extends Component {
  componentDidMount() {
    this.setState({
      componentDidMount: true,
    });

    if (!this.props.hasOwnProperty("contacts")) {
      const contacts = load("contacts");

      if (contacts) {
        contacts.map((contact) =>
          this.props.dispatch(addContact(contact.name, contact.number))
        );
      }
    }
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>

        <ContactForm />

        <h2>Contacts</h2>

        <Filter />

        <ContactList />
      </>
    );
  }
}

export default connect()(App);
