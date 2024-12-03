import React, { useState } from "react";

export const Register = ({
  onFormSwitch,
  registeredUsers,
  setIsLoggedIn,
  setUserName,
}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [emailTaken, setEmailTaken] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      registeredUsers.some(
        (user) => user.email === email && user.password === pass
      )
    ) {
      setEmailTaken(true);
    } else {
      registeredUsers.push({ name: name, email: email, password: pass });
      setUserName(name);
      setIsLoggedIn(true);
    }
    console.log(email);
  };

  return (
    <div className="auth-form-container bg-[#282c34]">
      <h2 className="text-3xl font-bold">Register</h2>
      {emailTaken && (
        <label className="text-red-600 py-4">
          An account already exists for this email!
        </label>
      )}
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="login-label" htmlFor="name">
          Full name
        </label>
        <input
          className="login-input"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Full Name"
        />
        <label className="login-label" htmlFor="email">
          Email
        </label>
        <input
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPass(e.target.value)}
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
      <button className="link-btn pt-5" onClick={() => onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
