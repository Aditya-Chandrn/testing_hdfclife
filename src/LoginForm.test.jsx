import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Login Form", () => {
  test("renders form elements", () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("typing works in inputs", () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "test@mail.com" } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "1234" } });
    expect(screen.getByPlaceholderText("Email").value).toBe("test@mail.com");
    expect(screen.getByPlaceholderText("Password").value).toBe("1234");
  });

  test("shows welcome message on submit", () => {
    render(<LoginForm />);
    fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "user@mail.com" } });
    fireEvent.click(screen.getByText("Login"));
    expect(screen.getByText("Welcome, user@mail.com")).toBeInTheDocument();
  });
});
