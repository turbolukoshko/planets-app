import { parseFavoritePlanets } from "./parseFavoritePlanets";

describe("parseFavoritePlanets", () => {
  it("Should parse favorite planets from localStorage", () => {
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue(
        JSON.stringify([
          { name: "Earth", id: 1 },
          { name: "Mars", id: 2 },
        ])
      ),
    };
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
      writable: true,
    });

    const favoritePlanets = parseFavoritePlanets();

    expect(localStorageMock.getItem).toHaveBeenCalledWith("favoritePlanets");
    expect(favoritePlanets).toEqual([
      { name: "Earth", id: 1 },
      { name: "Mars", id: 2 },
    ]);
  });

  it("Should return an empty array if localStorage is empty", () => {
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue(null),
    };
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
      writable: true,
    });
    const favoritePlanets = parseFavoritePlanets();

    expect(localStorageMock.getItem).toHaveBeenCalledWith("favoritePlanets");
    expect(favoritePlanets).toEqual([]);
  });
});
