import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter App", () => {
  test("renders heading", () => {
    render(<Counter />);
    expect(screen.getByText("Counter App")).toBeInTheDocument();
  });

  test("initial count is 0", () => {
    render(<Counter />);
    expect(screen.getByTestId("count-value").textContent).toBe("0");
  });

  test("increments count", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByTestId("count-value").textContent).toBe("1");
  });

  test("decrements count", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Decrement"));
    expect(screen.getByTestId("count-value").textContent).toBe("-1");
  });
});
