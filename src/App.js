import React, { useState } from 'react';
import NameForm from './components/NameForm';
import Certificate from './components/Certificate';
import './styles/App.css';

function App() {
  const [userName, setUserName] = useState(() => {
    // Check if we have a stored name
    return localStorage.getItem('userName') || '';
  });

  const handleNameSubmit = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name);
  };

  return (
    <div className="app">
      {!userName ? (
        <NameForm onSubmit={handleNameSubmit} />
      ) : (
        <Certificate recipientName={userName} />
      )}
    </div>
  );
}

export default App;
