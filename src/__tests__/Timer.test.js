import { fireEvent, render, screen } from "@testing-library/react";
import Timer from "../components/Timer";
import "@testing-library/jest-dom";

jest.spyOn(window.localStorage.__proto__, "setItem");
window.localStorage.__proto__.setItem = jest.fn();

test("renders a button that can be toggled between Start and Stop", async () => {
  render(<Timer setOccurrences={jest.fn()} />);

  expect(screen.getByText("Start")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Start"));

  expect(await screen.findByText("Stop")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Stop"));

  expect(await screen.findByText("Start")).toBeInTheDocument();
});

test("When a timer is started saves the start time to local storage", () => {
  render(<Timer setOccurrences={jest.fn()} />);

  fireEvent.click(screen.getByText("Start"));

  expect(localStorage.setItem).toHaveBeenCalled();
});

test("When a timer is stopped saves the end time to local storage", () => {
  render(<Timer setOccurrences={jest.fn()} />);

  fireEvent.click(screen.getByText("Start"));

  fireEvent.click(screen.getByText("Stop"));

  expect(localStorage.setItem).toHaveBeenCalledTimes(3);
});
