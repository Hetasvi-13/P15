import React, { useRef, useState } from 'react';

function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    setSubmittedData({
      username: username,
      password: password
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-6 text-center text-3xl font-bold text-blue-600">
          Login Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block font-semibold">
              Username:
            </label>

            <input
              type="text"
              ref={usernameRef}
              placeholder="Enter your username"
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Password:
            </label>

            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter your password"
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        {submittedData && (
          <div className="mt-6 rounded-lg bg-green-100 p-4">
            <h2 className="mb-3 text-xl font-bold text-green-700">
              Submitted Information
            </h2>

            <p className="mb-2">
              <strong>Username:</strong> {submittedData.username}
            </p>

            <p>
              <strong>Password:</strong> {submittedData.password}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default LoginForm;