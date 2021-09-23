import React, { useState } from 'react';

export default function Form({ addContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value);
    }
  };

  return (
    <div>
      <form>
        <input
          onChange={(e) => onChange(e)}
          name='name'
          id='name'
          value={name}
          placeholder='Enter a name'
        />
        <br />
        <input
          onChange={(e) => onChange(e)}
          name='phone'
          id='phone'
          value={phone}
          placeholder='Enter a phone number'
        />
        <br />
        <button
          onClick={(e) => {
            if (name !== '' && phone !== '') {
              addContact(name.trim(), phone.trim());
              setName('');
              setPhone('');
            }
            e.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
