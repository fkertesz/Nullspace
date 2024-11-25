import { useState } from "react";
import "./App.css";
import Tasks from "./MinimumViableComponents/Tasks";
import { Bars3CenterLeftIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Calendar from "./MinimumViableComponents/Calendar";
import Reminders from "./MinimumViableComponents/Reminders";
import Announcements from "./MinimumViableComponents/Announcements";

function App() {
  const [customizationActive, setCustomizationActive] = useState(false);
  const [activeModules, setActiveModules] = useState({
    calendar: true,
    tasks: true,
    reminders: false,
    announcements: false,
  });

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
      <header className="App-header">
        <nav className="absolute top-5 right-5">
          <div
            onClick={() => setCustomizationActive(!customizationActive)}
            className="flex gap-4 items-center justify-center bg-zinc-600 hover:bg-zinc-500 py-4 px-2 rounded-xl cursor-pointer group"
          >
            <div className="text-base uppercase text-right font-bold hidden group-hover:block transition-all">
              <h1>Customize</h1>
              <h1>Dashboard</h1>
            </div>
            <Bars3CenterLeftIcon className="w-10 h-10" />
          </div>
        </nav>

        {customizationActive && (
          <div className="absolute top-32 bg-zinc-600  px-28 py-6 rounded-2xl">
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

        {Object.keys(activeModules).map(
          (item) => activeModules[item] && moduleMapping[item]
        )}
      </header>
    </div>
  );
}

export default App;
