import { FC } from "react";

import { ArrowDown } from "../../shared/SVG/ArrowDown/ArrowDown";
import { ArrowUp } from "../../shared/SVG/ArrowUp/ArrowUp";
import { PlanetTableRow } from "../PlanetTable.styles";
import { PlanetHead, PlanetTableHeadCell } from "./PlanetTableHead.styles";

type PlanetTableHeadProps = {
  handleSortByDiameter: () => void;
  sortByDiameterAsc: boolean;
  handleSortByPopulation: () => void;
  sortByPopulationAsc: boolean;
};

export const PlanetTableHead: FC<PlanetTableHeadProps> = ({
  handleSortByDiameter,
  sortByDiameterAsc,
  handleSortByPopulation,
  sortByPopulationAsc,
}) => {
  return (
    <PlanetHead>
      <PlanetTableRow>
        <PlanetTableHeadCell>Name</PlanetTableHeadCell>
        <PlanetTableHeadCell>Climate</PlanetTableHeadCell>
        <PlanetTableHeadCell onClick={handleSortByDiameter}>
          Diameter {sortByDiameterAsc ? <ArrowUp /> : <ArrowDown />}
        </PlanetTableHeadCell>
        <PlanetTableHeadCell onClick={handleSortByPopulation}>
          Population {sortByPopulationAsc ? <ArrowUp /> : <ArrowDown />}
        </PlanetTableHeadCell>
        <PlanetTableHeadCell>Favorite</PlanetTableHeadCell>
      </PlanetTableRow>
    </PlanetHead>
  );
};
