import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("renders the navigation bar", async () => {
  render(<App />);

  expect(screen.getByText("Timer")).toBeInTheDocument();
  expect(screen.getByText("Graph")).toBeInTheDocument();
  expect(screen.getByText("Something else")).toBeInTheDocument();

  expect(screen.getByText("Duration")).toBeInTheDocument();
  expect(screen.getByText("Frequency")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Graph"));

  expect(await screen.findByText("This is a graph")).toBeInTheDocument();
  expect(screen.queryByText("Duration")).not.toBeInTheDocument();
  expect(screen.queryByText("Frequency")).not.toBeInTheDocument();
});
