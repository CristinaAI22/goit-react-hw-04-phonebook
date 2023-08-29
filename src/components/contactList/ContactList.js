import React, { Component } from 'react';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, filter, onContactDelete } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <span>
              {contact.name} - {contact.number}
            </span>
            <button
              className={css.deleteBtn}
              onClick={() => onContactDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
