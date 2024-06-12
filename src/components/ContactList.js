import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-contact">Add New Contact</Link>
    </div>
  );
};

export default ContactList;
