import { render } from "@testing-library/react";
import { Planet } from "./Planet";

const mockPlanet = {
  id: "1",
  name: "Tatooine",
  climates: ["temperate"],
  diameter: "12500",
  population: "1000",
  gravity: "N/A",
};

test("Renders planet information correctly", () => {
  const { getByText } = render(<Planet planet={mockPlanet} />);

  const planetNameElement = getByText(/Tatooine/i);
  expect(planetNameElement).toBeInTheDocument();

  const climateElement = getByText(/Climate: temperate/i);
  expect(climateElement).toBeInTheDocument();

  const gravityElement = getByText(/Gravity: N\/A/i);
  expect(gravityElement).toBeInTheDocument();
});
