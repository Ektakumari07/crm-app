import React from 'react';
import ContactDetail from '../components/ContactDetail';

const Contact = ({ contacts }) => {
  return (
    <div className="container">
      <ContactDetail contacts={contacts} />
    </div>
  );
};

export default Contact;
