import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Phonebook from 'components/Phonebook/';
import AddContactForm from 'components/AddContactForm/';
import Contacts from 'components/Contacts/';
import FindField from 'components/FindField/';

import users from '../../users.json';

class App extends Component {
  state = {
    currentPage: 'addContact',
    contacts: users,
    filter: '',
  };

  componentDidMount() {
    const contactsLS = JSON.parse(localStorage.getItem('contacts'));
    if (contactsLS) {
      this.setState({ contacts: contactsLS });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = data => {
    const newItem = {
      id: nanoid(5),
      ...data,
    };
    this.setState(({ contacts }) => ({
      contacts: [newItem, ...contacts],
    }));
  };

  checkingForMatches = data => {
    const { name } = data;
    const matches = this.state.contacts.find(item => item.name === name);
    if (matches) {
      alert(
        `${name.charAt(0).toUpperCase() + name.slice(1)} is already in contacts`
      );
      return;
    }
    this.addNewContact(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };
  handlePageChange = () => {
    this.setState(prevState => ({
      currentPage:
        prevState.currentPage === 'addContact' ? 'contacts' : 'addContact',
    }));
  };

  render() {
    return (
      <Phonebook title="Phonebook" changePage={this.handlePageChange}>
        {this.state.currentPage === 'addContact' && (
          <AddContactForm checkingForMatches={this.checkingForMatches} />
        )}
        {this.state.currentPage === 'contacts' && (
          <Contacts
            contacts={this.getVisibleContacts()}
            onDeleteContact={this.deleteContact}
          >
            <FindField
              value={this.state.filter}
              changeFilter={this.changeFilter}
            />
          </Contacts>
        )}
      </Phonebook>
    );
  }
}

export default App;
