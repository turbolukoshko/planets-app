import { render, fireEvent, waitFor } from "@testing-library/react";
import { Favorites } from "./Favorites";

jest.mock("../../assets/planet.jpeg", () => "planetImageUrl");

describe("Favorites component", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(),
      },
      writable: true,
    });
  });

  test("Renders favorites list correctly when there are favorite planets", () => {
    const favoritePlanets = [
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
        climates: ["temperate"],
        diameter: "12500",
        population: "1000",
        gravity: "N/A",
      },
    ];

    window.localStorage.getItem = jest.fn(() =>
      JSON.stringify(favoritePlanets)
    );

    const { getByText, getAllByText } = render(<Favorites />);

    expect(getByText("Favorites")).toBeInTheDocument();
    expect(getByText("Tatooine")).toBeInTheDocument();
    expect(getByText("Alderaan")).toBeInTheDocument();
    expect(getAllByText(/Climate:/i)).toHaveLength(2);
    expect(getAllByText(/Gravity:/i)).toHaveLength(2);
  });

  test('Renders "No favorites" message when there are no favorite planets', () => {
    const { getByText } = render(<Favorites />);

    expect(getByText("Favorites")).toBeInTheDocument();
    expect(getByText("No favorites")).toBeInTheDocument();
  });

  test("Removes favorite planet when remove button is clicked", async () => {
    const favoritePlanets = [
      {
        id: "1",
        name: "Tatooine",
        climates: ["temperate"],
        diameter: "12500",
        population: "1000",
        gravity: "N/A",
      },
    ];

    window.localStorage.getItem = jest.fn(() =>
      JSON.stringify(favoritePlanets)
    );

    const { getByText, getByTestId } = render(<Favorites />);

    fireEvent.click(getByTestId("remove-button"));

    await waitFor(() => {
      expect(
        getByText("Planet will be remove from favorites")
      ).toBeInTheDocument();
    });

    fireEvent.click(getByText("Remove"));

    await waitFor(() => {
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        "favoritePlanets",
        JSON.stringify([])
      );
    });
  });
});
