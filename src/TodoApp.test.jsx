import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("Todo App", () => {
  test("renders input and button", () => {
    render(<TodoApp />);
    expect(screen.getByPlaceholderText("Add todo")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("adding todo updates list", () => {
    render(<TodoApp />);
    fireEvent.change(screen.getByPlaceholderText("Add todo"), { target: { value: "Task 1" } });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("Task 1")).toBeInTheDocument();
  });

  test("deleting todo removes from list", () => {
    render(<TodoApp />);
    fireEvent.change(screen.getByPlaceholderText("Add todo"), { target: { value: "Task 1" } });
    fireEvent.click(screen.getByText("Add"));
    fireEvent.click(screen.getByText("Delete"));
    expect(screen.queryByText("Task 1")).toBeNull();
  });
});
