import React from 'react';
import List from './List';
import Form from './Form';

export default function Contacts({contacts, addContact}) {
  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={addContact} />
    </div>
  );
}
