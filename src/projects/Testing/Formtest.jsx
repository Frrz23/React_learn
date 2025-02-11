import React, { useState } from 'react';

const Formtest = () => {
  const [sam, setsam] = useState({
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // ✅ Correctly extracting name and value
    setsam((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(sam);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Enter your name"
        value={sam.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        value={sam.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button> {/* ✅ Fixed button type and removed incorrect placeholder */}
    </form>
  );
};

export default Formtest;
