import { useState } from "react";
import "./App.css";
import Tasks from "./MinimumViableComponents/Tasks";
import { WrenchScrewdriverIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Calendar from "./MinimumViableComponents/Calendar";
import Reminders from "./MinimumViableComponents/Reminders";
import Announcements from "./MinimumViableComponents/Announcements";
import LoginRegisterScreen from "./MinimumViableComponents/LoginRegisterScreen";

function App() {
  // Fake registered users for prototype
  const [registeredUsers, setRegisteredUsers] = useState([
    { name: "zac", email: "zcowan@bellarmine.edu", password: "1234" },
    { name: "fani", email: "fkertesz@bellarmine.edu", password: "1234" },
    { name: "nicholas", email: "nnewsome@bellarmine.edu", password: "1234" },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeUser, setActiveUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [customizationActive, setCustomizationActive] = useState(false);
  const [profileViewActive, setProfileViewActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [activeModules, setActiveModules] = useState({
    calendar: true,
    tasks: true,
    reminders: false,
    announcements: false,
  });

  // Module mapping maps an element of activeModules to a React component.
  // Order dictates the order components are rendered.
  const moduleMapping = {
    calendar: <Calendar />,
    tasks: <Tasks />,
    reminders: <Reminders />,
    announcements: <Announcements />,
  };

  const handleModuleChange = (event) => {
    const { name, checked } = event.target;
    setActiveModules({
      ...activeModules,
      [name]: checked,
    });
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginRegisterScreen
          setIsLoggedIn={setIsLoggedIn}
          setActiveUser={setActiveUser}
          registeredUsers={registeredUsers}
          setRegisteredUsers={setRegisteredUsers}
        />
      ) : (
        <header
          className={`App-header ${
            Object.keys(activeModules).filter((key) => activeModules[key])
              .length > 1
              ? "min-h-[150vh]" // Apply this class if more than one module is active
              : "h-screen" // Default height if only one module is active
          }`}
        >
          <nav className="sticky top-10 bottom-0 left-0 w-full right-0 z-50 bg-red-300">
            <h1
              onClick={() => {
                setProfileViewActive(!profileViewActive);
              }}
              className="absolute top-0 left-5 font-bold text-3xl text-white drop-shadow-lg hover:underline cursor-pointer"
            >
              Welcome to VectorSpace {activeUser.name}!
            </h1>
            <div
              onClick={() => setCustomizationActive(!customizationActive)}
              className={`absolute top-0 right-5 flex gap-4 items-center justify-center bg-zinc-600 hover:bg-zinc-500 p-4 rounded-xl cursor-pointer group transition-all ${
                customizationActive && "bg-zinc-700 ring-4 ring-white"
              }`}
            >
              <WrenchScrewdriverIcon
                className={`w-10 h-10 transition-all ${
                  customizationActive && "rotate-12 scale-110"
                }`}
              />
            </div>
          </nav>
          {profileViewActive && !customizationActive && (
            <div className="sticky top-32 bg-zinc-600 px-28 py-6 rounded-2xl z-50">
              <XCircleIcon
                onClick={() => {
                  setProfileViewActive(false);
                }}
                className="h-14 w-14 hover:h-16 hover:w-16 hover:text-red-500 transition-all absolute right-4 top-4 cursor-pointer"
              />
              <h1>Current Profile</h1>
              <div className="text-left">
                <div>
                  <h2 className="">Name</h2>
                  <p className="pl-10">{activeUser.name}</p>
                </div>
                <div>
                  <h2 className="">Email</h2>
                  <p className="pl-10">{activeUser.email}</p>
                </div>
                <div>
                  <h2 className="">
                    Password (Click Below to {showPassword ? "Hide" : "Show"}{" "}
                    Password)
                  </h2>
                  {showPassword ? (
                    <p
                      onClick={() => {
                        setShowPassword(false);
                      }}
                      className="pl-10 cursor-pointer hover:font-bold"
                    >
                      {activeUser.password}
                    </p>
                  ) : (
                    <p
                      onClick={() => {
                        setShowPassword(true);
                      }}
                      className="pl-10 cursor-pointer hover:font-bold"
                    >
                      **************
                    </p>
                  )}
                </div>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setProfileViewActive(false);
                  }}
                  className="bg-red-500 hover:bg-red-900 text-white p-2 rounded-lg w-full mt-4"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
          {customizationActive && !profileViewActive && (
            <div className="sticky top-32 bg-zinc-600 px-28 py-6 rounded-2xl z-50">
              <XCircleIcon
                onClick={() => {
                  setCustomizationActive(false);
                }}
                className="h-14 w-14 hover:h-16 hover:w-16 hover:text-red-500 transition-all absolute right-4 top-4 cursor-pointer"
              />
              <h1>Customize Active Modules</h1>
              <div>
                {Object.keys(activeModules).map((item) => (
                  <div key={item} className="flex">
                    <label className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2"
                        name={item}
                        checked={activeModules[item]}
                        onChange={handleModuleChange}
                      />
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main content section */}
          <div
            className={`flex flex-col gap-10 ${
              Object.keys(activeModules).filter((key) => activeModules[key])
                .length > 1
                ? "h-auto min-h-[150vh]" // Apply dynamic height if both calendar and tasks are active
                : "h-screen" // Default height for single module
            } mt-24`}
          >
            {Object.keys(moduleMapping).map(
              (item) => activeModules[item] && moduleMapping[item]
            )}
          </div>
        </header>
      )}
    </div>
  );
}

export default App;
