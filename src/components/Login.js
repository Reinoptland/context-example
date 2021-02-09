import React, { useState } from "react";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  function handleInput(event) {
    console.log("INPUT:", event.target.name, event.target.value);

    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault(); // no refresh
    console.log("credentials:", credentials);
  }

  console.log(credentials);

  return (
    <div>
      LOGIN
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInput}
            value={credentials.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInput}
            value={credentials.password}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
