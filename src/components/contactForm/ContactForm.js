import React, { Component } from 'react';
import css from '../contactForm/ContactForm.module.css';

class ContactForm extends Component {
  render() {
    const {
      name,
      number,
      nameError,
      numberError,
      onNameChange,
      onNumberChange,
      onFormSubmit,
    } = this.props;

    return (
      <form className={css.form} onSubmit={onFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={onNameChange}
            required
          />
          {nameError && <p className={css.error}>{nameError}</p>}
        </label>
        <label>
          Phone number:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={onNumberChange}
            required
          />
          {numberError && <p className={css.error}>{numberError}</p>}
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
