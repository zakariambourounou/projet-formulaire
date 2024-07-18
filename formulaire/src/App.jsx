import React, { useState } from 'react';
import './App.css';
import { Formulaire } from './formulaire';

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [changement, setChangement] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    setWelcomeMessage(`Bienvenue, ${username}!`);
    setChangement(true);
  };

  return (
    <>
      <Formulaire message={welcomeMessage} validation={handleSubmit} etat={changement} />
    </>
  );
}

export default App;
