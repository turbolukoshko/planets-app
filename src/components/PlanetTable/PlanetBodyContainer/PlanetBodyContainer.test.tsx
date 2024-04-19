import { render, fireEvent } from "@testing-library/react";
import { PlanetBodyContainer } from "./PlanetBodyContainer";

describe("PlanetBodyContainer component", () => {
  const mockPlanets = [
    {
      id: "1",
      name: "Tatooine",
      climates: ["temperate"],
      diameter: "12500",
      population: "1000",
      gravity: "N/A",
    },
    {
      id: "2",
      name: "Alderaan",
      climates: ["arid"],
      diameter: "12501",
      population: "1001",
      gravity: "1",
    },
  ];

  const mockHandleRoute = jest.fn();
  const mockHandleAddToFavorite = jest.fn();

  test("Renders component", () => {
    render(
      <PlanetBodyContainer
        planets={mockPlanets}
        handleRoute={mockHandleRoute}
        pair={{ "1": 1, "2": 2 }}
        handleAddToFavorite={mockHandleAddToFavorite}
        idFavoritePlanets={[]}
      />
    );
  });

  test("Displays planet information correctly", () => {
    const { getByText } = render(
      <PlanetBodyContainer
        planets={mockPlanets}
        handleRoute={mockHandleRoute}
        pair={{ "1": 1, "2": 2 }}
        handleAddToFavorite={mockHandleAddToFavorite}
        idFavoritePlanets={[]}
      />
    );

    expect(getByText("Tatooine")).toBeInTheDocument();
    expect(getByText("temperate")).toBeInTheDocument();
    expect(getByText("arid")).toBeInTheDocument();
    expect(getByText("12500")).toBeInTheDocument();
    expect(getByText("1000")).toBeInTheDocument();
  });

  test("Clicking on a row triggers handleRoute function with correct routeId", () => {
    const { getByText } = render(
      <PlanetBodyContainer
        planets={mockPlanets}
        handleRoute={mockHandleRoute}
        pair={{ "1": 1, "2": 2 }}
        handleAddToFavorite={mockHandleAddToFavorite}
        idFavoritePlanets={[]}
      />
    );

    fireEvent.click(getByText("Alderaan"));
    expect(mockHandleRoute).toHaveBeenCalledWith(2);
  });
});
