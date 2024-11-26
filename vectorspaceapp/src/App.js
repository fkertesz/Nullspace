import { useState } from "react";
import "./App.css";
import Tasks from "./MinimumViableComponents/Tasks";
import { WrenchScrewdriverIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Calendar from "./MinimumViableComponents/Calendar";
import Reminders from "./MinimumViableComponents/Reminders";
import Announcements from "./MinimumViableComponents/Announcements";
import LoginScreen from "./MinimumViableComponents/LoginScreen";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customizationActive, setCustomizationActive] = useState(false);
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
        <LoginScreen setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <header className="App-header">
          <nav className="sticky top-10 bottom-0 left-0 w-full right-0 z-50 bg-red-300">
            <h1 className="absolute top-0 left-5 font-bold text-3xl text-white drop-shadow-lg">
              VectorSpace
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

          {customizationActive && (
            <div className="absolute top-32 bg-zinc-600  px-28 py-6 rounded-2xl z-50">
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

          <div className="flex flex-col gap-10 h-screen mt-24">
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
