// frontend/src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');
  const [options, setOptions] = useState({
    length: 12,
    useUppercase: false,
    useDigits: true,
    useSpecialChars: false,
  });

  const generatePassword = async () => {
    const response = await fetch('http://localhost:5000/generate-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    });

    const data = await response.json();
    setPassword(data.password);
    setHashedPassword(data.hashedPassword);
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div>
        <label>Password Length:</label>
        <input
          type="number"
          value={options.length}
          onChange={(e) => setOptions({ ...options, length: parseInt(e.target.value) })}
        />
      </div>
      <div>
        <label>Include Uppercase:</label>
        <input
          type="checkbox"
          checked={options.useUppercase}
          onChange={(e) => setOptions({ ...options, useUppercase: e.target.checked })}
        />
      </div>
      <div>
        <label>Include Digits:</label>
        <input
          type="checkbox"
          checked={options.useDigits}
          onChange={(e) => setOptions({ ...options, useDigits: e.target.checked })}
        />
      </div>
      <div>
        <label>Include Special Characters:</label>
        <input
          type="checkbox"
          checked={options.useSpecialChars}
          onChange={(e) => setOptions({ ...options, useSpecialChars: e.target.checked })}
        />
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <strong>Password:</strong> {password}
      </div>
      <div>
        <strong>Hashed Password:</strong> {hashedPassword}
      </div>
    </div>
  );
}

export default App;
