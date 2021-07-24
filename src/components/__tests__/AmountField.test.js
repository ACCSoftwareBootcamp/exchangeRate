import { render, screen } from "@testing-library/react";
import { AmountField } from "../AmountField";
import { ExchangeRate } from "../ExchangeRate";

test("renders title", () => {
  render(<ExchangeRate />);
  const linkElement = screen.getByText(/exchange rates/i);
  expect(linkElement).toBeInTheDocument();
});

export default AmountField;