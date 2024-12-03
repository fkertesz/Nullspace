import React, { useState } from "react";
//import logo from './logo.svg';
import "../App.css";
import { Login } from "./Login";
import { Register } from "./Register";

function LoginRegisterScreen({
  setIsLoggedIn,
  setActiveUser,
  registeredUsers,
  setRegisteredUsers,
}) {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App-login flex flex-col bg-gradient-to-tr from-[#752936] to-[#1e080c] animate-gradient">
      <h1 className="text-white text-6xl font-bold my-20">
        Welcome to VectorSpace.
      </h1>
      {currentForm === "login" ? (
        <Login
          onFormSwitch={toggleForm}
          registeredUsers={registeredUsers}
          setRegisteredUsers={setRegisteredUsers}
          setIsLoggedIn={setIsLoggedIn}
          setActiveUser={setActiveUser}
        />
      ) : (
        <Register
          onFormSwitch={toggleForm}
          registeredUsers={registeredUsers}
          setRegisteredUsers={setRegisteredUsers}
          setIsLoggedIn={setIsLoggedIn}
          setActiveUser={setActiveUser}
        />
      )}
    </div>
  );
}

export default LoginRegisterScreen;
