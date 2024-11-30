import React, { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");

  const addTask = () => {
    if (taskName && taskDueDate && taskTime && tasks.length < 5) {
      setTasks([
        ...tasks,
        {
          name: taskName,
          dueDate: taskDueDate,
          time: taskTime,
          priority: taskPriority,
          completed: false,
        },
      ]);
      setTaskName("");
      setTaskDueDate("");
      setTaskTime("");
      setTaskPriority("Low");
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const handleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true; // Mark as completed
    setTasks(updatedTasks);
  };

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center">Welcome to the Tasks Module!</h1>
        <p className="text-center italic text-red-500">
          Add tasks, set their due dates, time, and priority. Mark them as completed when done!
        </p>
      </div>

      <div className="bg-white text-black p-4 rounded-xl text-lg">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Task Name"
            className="border-2 border-gray-300 p-2 rounded-lg mb-2 w-full"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <input
            type="date"
            className="border-2 border-gray-300 p-2 rounded-lg mb-2 w-full"
            value={taskDueDate}
            onChange={(e) => setTaskDueDate(e.target.value)}
          />
          <input
            type="time"
            className="border-2 border-gray-300 p-2 rounded-lg mb-2 w-full"
            value={taskTime}
            onChange={(e) => setTaskTime(e.target.value)}
          />
          <select
            className="border-2 border-gray-300 p-2 rounded-lg mb-4 w-full"
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
          <button
            onClick={addTask}
            className="bg-blue-500 text-white p-2 rounded-lg w-full"
            disabled={tasks.length >= 5}
          >
            Add Task
          </button>
          {tasks.length >= 5 && (
            <p className="text-red-500 text-center mt-2">You can only add up to 5 tasks!</p>
          )}
        </div>

        <div className="space-y-4 overflow-y-auto max-h-[60vh]">
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-4 border-b-2 ${
                task.completed ? "bg-gray-200" : "bg-white"
              }`}
            >
              <div>
                <h3 className="font-bold">{task.name}</h3>
                <p>Due: {task.dueDate} | Time: {task.time}</p>
                <p>Priority: {task.priority}</p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleComplete(index)}
                  className="w-5 h-5"
                  disabled={task.completed}
                />
                <span>{task.completed ? "Completed" : "Incomplete"}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 ml-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tasks;
