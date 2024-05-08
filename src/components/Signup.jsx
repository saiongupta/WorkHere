import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with email:', email, 'and password:', password);

    // Save signup info to localStorage
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));

    // Simulate a successful signup
    setIsSuccess(true);

    // Redirect to home page after 3 seconds
    setTimeout(() => {
      // Redirect to home page
      window.location.href = '/'; // Change '/' to your home page URL
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            Sign up
          </button>
        </div>
      </form>
      {isSuccess && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-green-500 text-white flex justify-center items-center">
          <p>Signup successful! Redirecting to home page...</p>
        </div>
      )}
    </div>
  );
}

export default Signup;
