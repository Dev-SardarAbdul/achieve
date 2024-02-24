import { render, fireEvent } from "@testing-library/react"; // Import RTL functions
import TextInput from "./textInput";

it("stores user input value", () => {
  // Render the component
  const { getByPlaceholderText } = render(<TextInput />);

  const inputElement = getByPlaceholderText("Enter your email");

  fireEvent.change(inputElement, { target: { value: "test@example.com" } });

  expect(inputElement.value).toBe("test@example.com");
});
