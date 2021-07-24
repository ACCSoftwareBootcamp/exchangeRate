import { render, screen } from "@testing-library/react";
import { ExchangeRate } from "../ExchangeRate";
import { RateTable } from "../RateTable";

test("renders title", () => {
  render(<ExchangeRate />);
  const linkElement = screen.getByText(/exchange rates/i);
  expect(linkElement).toBeInTheDocument();
});


