import React, { Component } from 'react';
import css from '../filter/Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;

    return (
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search contacts..."
        className={css.input}
      />
    );
  }
}

export default Filter;
