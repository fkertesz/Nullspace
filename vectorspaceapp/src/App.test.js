import { render, screen, input } from "@testing-library/react";
import App from "./App";
import Calendar from "./MinimumViableComponents/Calendar";

test("Login appears", () => {
  render(<App />);
  const welcomeScreenElement = screen.getByText(/Welcome to VectorSpace./);
  const usernameElement = screen.getByText(/Username/);
  const passwordElement = screen.getByText(/Password/);
  expect(welcomeScreenElement).toBeInTheDocument();
  expect(usernameElement).toBeInTheDocument();
  expect(passwordElement).toBeInTheDocument();
});

test("Calendar component presents options", () => {
  render(<Calendar />);
  const month = screen.getByText(/Month/);
  const week = screen.getByText(/Week/);
  const day = screen.getByText(/Day/);
  const agenda = screen.getByText(/Agenda/);
  expect(month).toBeInTheDocument();
  expect(week).toBeInTheDocument();
  expect(day).toBeInTheDocument();
  expect(agenda).toBeInTheDocument();
});
