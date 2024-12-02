import React, { useState } from "react";

function LoginScreen({ setIsLoggedIn, setUserName }) {
  const [userNameField, setUserNameField] = useState("John Doe");
  return (
    <header className="App-header">
      <div>
        <h1 className="text-5xl font-bold my-20">Welcome to VectorSpace.</h1>

        <form className="flex flex-col gap-12">
          <div className="flex gap-6 flex-1 justify-center items-center w-full">
            <h1 className="w-30">Username</h1>
            <input
              type="text"
              required
              placeholder={userNameField}
              onChange={(event) => setUserNameField(event.target.value)}
              className="w-64 rounded-xl text-black px-2 py-4"
            />
          </div>

          <div className="flex gap-6 flex-1 justify-center items-center w-full">
            <h1 className="w-30">Password</h1>
            <input
              type="password"
              required
              className="w-64 rounded-xl text-black px-2 py-4"
            />
          </div>
          <button
            onClick={() => {
              setIsLoggedIn(true);
              setUserName(userNameField);
            }}
            className="bg-[#752936] text-white px-2 py-4 rounded-xl"
          >
            Click to login
          </button>
        </form>
      </div>
    </header>
  );
}

export default LoginScreen;
