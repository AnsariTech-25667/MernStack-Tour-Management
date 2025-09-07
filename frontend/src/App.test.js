import { render } from "@testing-library/react";
import App from "./App";

test("renders demo heading", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Tour Management — Demo/i)).toBeTruthy();
});
