import React from 'react';
import ContactList from '../components/ContactList';

const Home = ({ contacts }) => {
  return (
    <div className="container">
      <h1>CRM Application</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Home;
