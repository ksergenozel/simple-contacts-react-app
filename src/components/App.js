import React, { useState, useEffect } from 'react';
import Contacts from './Contacts';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
      setIndex(JSON.parse(localStorage.getItem('contacts')).length);
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, []);

  const addContact = (name, phone) => {
    const newContact = { id: index, name: name, phone };
    const newContacts = [...contacts, newContact]
    setContacts(newContacts);
    setIndex(index + 1);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  return (
    <div
      style={{
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Contacts addContact={addContact} contacts={contacts} />
    </div>
  );
}
