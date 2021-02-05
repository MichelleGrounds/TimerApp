import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("renders the header", async () => {
  render(<App />);

  expect(screen.getByText("My Contractions")).toBeInTheDocument();
});
