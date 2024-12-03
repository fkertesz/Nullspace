import React, { useState } from "react";
//import logo from './logo.svg';
import "../App.css";
import { Login } from "./Login";
import { Register } from "./Register";

function LoginRegisterScreen() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App-login">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default LoginRegisterScreen;
