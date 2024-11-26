import React from "react";

function LoginScreen({ setIsLoggedIn }) {
  return (
    <header className="App-header">
      <div>
        <h1 className="text-5xl font-bold my-20">Welcome to VectorSpace.</h1>

        <div className="flex flex-col gap-6">
          <div className="flex gap-6 flex-1 justify-center items-center">
            <h1 className="w-30">Username</h1>
            <input
              type="text"
              className="w-64 rounded-xl text-black px-2 py-4"
            />
          </div>

          <div className="flex gap-6 flex-1 justify-center items-center">
            <h1 className="w-30">Password</h1>
            <input
              type="password"
              className="w-64 rounded-xl text-black px-2 py-4"
            />
          </div>
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
            className="bg-[#752936] text-white px-2 py-4 rounded-xl"
          >
            Click to login
          </button>
        </div>
      </div>
    </header>
  );
}

export default LoginScreen;
