import React, { useState } from "react";
//import logo from './logo.svg';
import "../App.css";
import { Login } from "./Login";
import { Register } from "./Register";

function LoginRegisterScreen({ setIsLoggedIn, setUserName }) {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  // Fake registered users for prototype
  const registeredUsers = [
    { name: "zac", email: "zcowan@bellarmine.edu", password: "1234" },
    { name: "fani", email: "fkertesz@bellarmine.edu", password: "1234" },
    { name: "nicholas", email: "nnewsome@bellarmine.edu", password: "1234" },
  ];

  return (
    <div className="App-login flex flex-col bg-gradient-to-tr from-[#752936] to-[#1e080c] animate-gradient">
      <h1 className="text-white text-6xl font-bold my-20">
        Welcome to VectorSpace.
      </h1>
      {currentForm === "login" ? (
        <Login
          onFormSwitch={toggleForm}
          registeredUsers={registeredUsers}
          setIsLoggedIn={setIsLoggedIn}
          setUserName={setUserName}
        />
      ) : (
        <Register
          onFormSwitch={toggleForm}
          registeredUsers={registeredUsers}
          setIsLoggedIn={setIsLoggedIn}
          setUserName={setUserName}
        />
      )}
    </div>
  );
}

export default LoginRegisterScreen;
