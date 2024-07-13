import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Register.css"

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Call API to register user
      console.log('Registration successful!');
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!username) {
      errors.username = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="registration-page rounded-lg">
      <h1 className='text-center text-2xl font-semibold'>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" required value={username} onChange={(event) => setUsername(event.target.value)} />
          {/* {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>} */}
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          {/* {errors.email && <div style={{ color: 'ed' }}>{errors.email}</div>} */}
        </label>
        <br />
        <label>
          Password:
          <input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" required value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </label>
        <br />
        <label>
          Phone Number :
          <input type="number" required value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <br />
        <label>
          Address :
          <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
        </label>
        <br />
        {errors && <div style={{ color: 'red', backgroundColor: 'white' }}>{errors}</div>}
        <button type="submit">Register Me</button>
        {/* <Link to={'/login'}><button type="submit">Register Me</button></Link> */}

      </form>
    </div>
  );
};

export default RegistrationPage;