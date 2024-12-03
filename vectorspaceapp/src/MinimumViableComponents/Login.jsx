import React, { useState } from "react";

export const Login = ({
  onFormSwitch,
  registeredUsers,
  setIsLoggedIn,
  setUserName,
}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [wrongUserOrPass, setWrongUserOrPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      registeredUsers.some(
        (user) => user.email === email && user.password === pass
      )
    ) {
      setUserName(
        registeredUsers.find(
          (user) => user.email === email && user.password === pass
        ).name
      );
      setIsLoggedIn(true);
    } else {
      setWrongUserOrPass(true);
    }
  };

  return (
    <div className="auth-form-container bg-[#282c34]">
      <h2 className="text-3xl font-bold">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {wrongUserOrPass && (
          <label className="text-red-600 py-4">
            Username or password entered is incorrect!
          </label>
        )}
        <label className="login-label" htmlFor="email">
          Email
        </label>
        <input
          className="login-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setWrongUserOrPass(false);
          }}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label className="login-label" htmlFor="password">
          Password
        </label>
        <input
          className="login-input"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
            setWrongUserOrPass(false);
          }}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button
          className="login-button text-[#752936] hover:font-bold"
          type="submit"
        >
          Log In
        </button>
      </form>
      <button
        className="link-btn pt-5"
        onClick={() => onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};
