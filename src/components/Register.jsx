import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Register.css"

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      // Call API to register user
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        // Registration successful, redirect to login page
        window.location.href = '/login';
      }
    } catch (error) {
      setError('An error occurred during registration');
    }
  };

  return (
    <div className="registration-page rounded-lg">
      <h1 className='text-center text-2xl font-semibold'>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </label>
        <br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
       <Link to={'/login'}><button type="submit">Register Me</button></Link>
        
      </form>
    </div>
  );
};

export default RegistrationPage;