import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function List({ contacts }) {
  const [filterText, setFilterText] = useState('');

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1;
  });

  return (
    <div>
      <input
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
        name={'filter'}
        id={'filter'}
        placeholder={'Filter by name or phone'}
      />
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}</span> - <span>{contact.phone}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  contacts: PropTypes.array.isRequired,
};
