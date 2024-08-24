import React, { useState } from 'react';

function SignupForm({isDarkMode:initialIsDarkMode }) {
  const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Signup form submitted:', { username, email });
  };

  return (
    <div className={`container ${isDarkMode ? 'bg-[#121213]' : 'bg-[#FFFFFF]'} `} >

      <h2 className="text-3xl font-bold mb-4">Signup Form</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group mb-4">
          <label className="block mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter username"
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </div>

        <div className="form-group mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </div>

        <div className="form-group mb-4">
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </div>

        <div className="form-group mb-4">
          <label className="block mb-2">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Enter confirm password"
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
        </div>

        <button
          type="submit"
          className={`bg-${isDarkMode ? 'blue-500' : 'orange-500'} hover:bg-${isDarkMode ? 'blue-700' : 'orange-700'} text-white font-bold py-2 px-4 rounded`}
        >
          Signup
        </button>
      </form>
      </div>
  );
}

export default SignupForm;