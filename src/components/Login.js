import React, { useState } from "react";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  function handleInput(event) {
    console.log("INPUT:", event.target.name, event.target.value);

    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault(); // no refresh
    console.log("credentials:", credentials);
    const response = await loginRequest(credentials);

    console.log(response.data);
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

async function loginRequest({ email, password }) {
  switch (true) {
    case email === "rein@rein.com" && password === "abcd":
      return { data: { message: "ok", userId: 1 } };

    default:
      return {
        data: { message: "error", errors: ["username or password incorrect"] },
      };
  }
}
