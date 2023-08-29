import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
    nameError: '',
    numberError: '',
  };

  validateName = name => {
    return /^[A-Za-z\s.'-]+$/.test(name);
  };

  validateNumber = number => {
    return /^[+]?[0-9\s-]+$/.test(number);
  };

  handleNameChange = event => {
    const name = event.target.value;
    this.setState({ name, nameError: '' });
  };

  handleNumberChange = event => {
    const number = event.target.value;
    this.setState({ number, numberError: '' });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, number, contacts } = this.state;

    if (!this.validateName(name)) {
      this.setState({ nameError: 'Invalid name format' });
      return;
    }

    if (!this.validateNumber(number)) {
      this.setState({ numberError: 'Invalid number format' });
      return;
    }

    if (this.isContactAlreadyExists(name)) {
      this.setState({ nameError: 'Contact already exists' });
      return;
    }

    this.setState({ nameError: '', numberError: '' });

    const newContact = { id: nanoid(), name: name, number: number };
    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });
  };

  isContactAlreadyExists = name => {
    const { contacts } = this.state;
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter, name, number, nameError, numberError } =
      this.state;

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          nameError={nameError}
          numberError={numberError}
          onNameChange={this.handleNameChange}
          onNumberChange={this.handleNumberChange}
          onFormSubmit={this.handleFormSubmit}
        />
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onContactDelete={this.handleContactDelete}
        />
      </div>
    );
  }
}

export default App;
