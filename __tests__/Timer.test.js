import { fireEvent, render, screen } from "@testing-library/react";
import Timer from "../Timer";
import "@testing-library/jest-dom";

test("renders a button that can be toggled between Start and Stop", async () => {
  render(<Timer />);

  expect(screen.getByText("Start")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Start"));

  expect(await screen.findByText("Stop")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Stop"));

  expect(await screen.findByText("Start")).toBeInTheDocument();
});
