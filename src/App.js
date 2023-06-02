import React, { useState } from 'react';
import './style.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: false,
    password: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let valid = true;
    let newErrors = { username: false, password: false };

    if (formData.username.trim().length === 0) {
      newErrors.username = true;
      valid = false;
    }
    if (formData.password.trim().length === 0) {
      newErrors.password = true;
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <div className="App">
      <h1>Formularz logowania</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nazwa użytkownika:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && (
          <p className="error">Nazwa użytkownika nie może być pusta</p>
        )}
        <br />
        <label htmlFor="password">Hasło:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">Hasło nie może być puste</p>}
        <br />
        <button type="submit">Zaloguj</button>
      </form>
    </div>
  );
}

export default App;
