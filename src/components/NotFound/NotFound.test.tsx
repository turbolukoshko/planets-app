import { render } from "@testing-library/react";
import { NotFound } from "./NotFound";

describe("NotFound component", () => {
  test("renders 404 - Not Found text", () => {
    const { getByText } = render(<NotFound />);

    const notFoundElement = getByText("404 - Not Found");

    expect(notFoundElement).toBeInTheDocument();
  });
});
