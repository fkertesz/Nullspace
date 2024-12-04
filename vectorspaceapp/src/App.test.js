import { render, screen } from "@testing-library/react";
import Calendar from "./MinimumViableComponents/Calendar";
import { Login } from "./MinimumViableComponents/Login";
import { Register } from "./MinimumViableComponents/Register";
import Reminders from "./MinimumViableComponents/Reminders";
import Tasks from "./MinimumViableComponents/Tasks";

test("Login displays neccessary labels", () => {
  render(<Login />);
  const emailElement = screen.getByTexet(/Email/, { exact: false });
  const passwordElement = screen.getByText(/Password/, { exact: false });
  expect(emailElement).toBeInTheDocument();
  expect(passwordElement).toBeInTheDocument();
});

test("Register displays neccessary labels", () => {
  render(<Register />);
  const nameElement = screen.getByText(/Full Name/, { exact: false });
  const emailElement = screen.getByText(/Email/, { exact: false });
  const passwordElement = screen.getByText(/Password/, { exact: false });
  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(passwordElement).toBeInTheDocument();
});

test("Calendar Module displays neccessary information", () => {
  render(<Calendar />);
  const month = screen.getByText(/Month/, { exact: false });
  const week = screen.getByText(/Week/, { exact: false });
  const day = screen.getByText(/Day/, { exact: false });
  const agenda = screen.getByText(/Agenda/, { exact: false });
  expect(month).toBeInTheDocument();
  expect(week).toBeInTheDocument();
  expect(day).toBeInTheDocument();
  expect(agenda).toBeInTheDocument();
});

test("Task Module displays neccessary information", () => {
  render(<Tasks />);
  const addTask = screen.getByText(/Add Task/, { exact: false });
  const taskInput = screen.getByPlaceholderText(/Task Name/, { exact: false });
  expect(addTask).toBeInTheDocument();
  expect(taskInput).toBeInTheDocument();
});

test("Reminder Module displays neccessary information", () => {
  render(<Reminders />);
  const addReminder = screen.getByText(/Add Reminder/, { exact: false });
  const removeReminder = screen.getByText(/Remove Reminder/, { exact: false });
  expect(addReminder).toBeInTheDocument();
  expect(removeReminder).toBeInTheDocument();
});
