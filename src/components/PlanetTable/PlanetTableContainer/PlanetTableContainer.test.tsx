import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PlanetTableContainer } from "./PlanetTableContainer";

describe("PlanetTableContainer", () => {
  it("Should render sorting buttons", () => {
    const planets = [
      {
        id: "1",
        name: "Tatooine",
        climates: ["temperate"],
        diameter: "12500",
        population: "1000",
        gravity: "N/A",
      },
    ];
    const setPlanets = jest.fn();
    const pair = { "1": 1 };

    render(
      <MemoryRouter>
        <PlanetTableContainer
          planets={planets}
          setPlanets={setPlanets}
          pair={pair}
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Diameter")).toBeInTheDocument();
    expect(screen.getByText("Population")).toBeInTheDocument();
  });

  it("Should sort planets by diameter in ascending order", () => {
    const planets = [
      {
        id: "1",
        name: "Tatooine",
        climates: ["temperate"],
        diameter: "12500",
        population: "1000",
        gravity: "N/A",
      },
    ];
    const setPlanets = jest.fn();
    const pair = { "1": 1, "2": 2 };

    render(
      <MemoryRouter>
        <PlanetTableContainer
          planets={planets}
          setPlanets={setPlanets}
          pair={pair}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Diameter"));

    expect(setPlanets).toHaveBeenCalledWith([
      {
        id: "1",
        name: "Tatooine",
        climates: ["temperate"],
        diameter: "12500",
        population: "1000",
        gravity: "N/A",
      },
    ]);
  });
});
