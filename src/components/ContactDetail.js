import React from 'react';
import { useParams } from 'react-router-dom';

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find(contact => contact.id === parseInt(id));

  return (
    <div>
      <h2>Contact Detail</h2>
      {contact ? (
        <div>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      ) : (
        <p>Contact not found</p>
      )}
    </div>
  );
};

export default ContactDetail;
