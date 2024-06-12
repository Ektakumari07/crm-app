import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AddContact from './components/AddContact';
import './styles/App.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Shyam singh', email: 'shyam@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Ramkrishna', email: 'rk@example.com', phone: '098-765-4321' }
  ]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home contacts={contacts} />} />
          <Route path="/contacts/:id" element={<Contact contacts={contacts} />} />
          <Route path="/add-contact" element={<AddContact addContact={addContact} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
