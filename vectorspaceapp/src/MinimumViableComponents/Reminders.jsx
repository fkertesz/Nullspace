import React, { useState } from "react";

function Reminders() {
  const [numReminders, setNumberReminders] = useState(2);

  const ReminderBoxes = () => {
    const arrayListComponents = [];
    for (let i = 0; i < numReminders; i++) {
      arrayListComponents.push(
        <textarea key={i} className="text-black p-4 w-full my-5 rounded-xl" />
      );
    }
    return <div className="w-full h-full">{arrayListComponents}</div>;
  };
  return (
    <>
      <div className="w-full h-auto relative mb-10">
        <h1 className="text-2xl font-bold text-center">
          Welcome to the Reminder Module!
        </h1>
        <p className="text-center italic text-red-500">
          A personal reminder section for things you may need later.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => setNumberReminders(numReminders + 1)}
            className="bg-blue-500 text-white p-2 rounded-lg w-full disabled:opacity-45"
            disabled={numReminders == 3}
          >
            Add Reminder Box
          </button>
          <button
            onClick={() => setNumberReminders(numReminders - 1)}
            className="bg-red-500 text-white p-2 rounded-lg w-full disabled:opacity-45"
            disabled={numReminders == 0}
          >
            Remove Reminder Box
          </button>
        </div>

        <ReminderBoxes />
      </div>
    </>
  );
}

export default Reminders;
