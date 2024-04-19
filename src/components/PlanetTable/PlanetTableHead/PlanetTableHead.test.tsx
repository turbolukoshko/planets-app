import { render, fireEvent } from "@testing-library/react";
import { PlanetTableHead } from "./PlanetTableHead";

describe("PlanetTableHead component", () => {
  const mockHandleSortByDiameter = jest.fn();
  const mockHandleSortByPopulation = jest.fn();

  test("Renders component", () => {
    render(
      <PlanetTableHead
        handleSortByDiameter={mockHandleSortByDiameter}
        sortByDiameterAsc={true}
        handleSortByPopulation={mockHandleSortByPopulation}
        sortByPopulationAsc={true}
      />
    );
  });

  test("Clicking on diameter header cell triggers handleSortByDiameter function", () => {
    const { getByText } = render(
      <PlanetTableHead
        handleSortByDiameter={mockHandleSortByDiameter}
        sortByDiameterAsc={true}
        handleSortByPopulation={mockHandleSortByPopulation}
        sortByPopulationAsc={true}
      />
    );

    fireEvent.click(getByText("Diameter"));
    expect(mockHandleSortByDiameter).toHaveBeenCalledTimes(1);
  });

  test("Clicking on population header cell triggers handleSortByPopulation function", () => {
    const { getByText } = render(
      <PlanetTableHead
        handleSortByDiameter={mockHandleSortByDiameter}
        sortByDiameterAsc={true}
        handleSortByPopulation={mockHandleSortByPopulation}
        sortByPopulationAsc={true}
      />
    );

    fireEvent.click(getByText("Population"));
    expect(mockHandleSortByPopulation).toHaveBeenCalledTimes(1);
  });

  test("Change based on sorting order", () => {
    const { getByText } = render(
      <PlanetTableHead
        handleSortByDiameter={mockHandleSortByDiameter}
        sortByDiameterAsc={true}
        handleSortByPopulation={mockHandleSortByPopulation}
        sortByPopulationAsc={false}
      />
    );

    const diameterHeaderCell = getByText("Diameter");
    const populationHeaderCell = getByText("Population");

    expect(diameterHeaderCell.textContent).toContain("Diameter ");
    expect(populationHeaderCell.textContent).toContain("Population ");
  });
});
