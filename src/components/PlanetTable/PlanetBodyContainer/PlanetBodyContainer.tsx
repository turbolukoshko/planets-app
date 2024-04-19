import { FC, MouseEvent } from "react";

import { FavoriteIcon } from "../../shared/SVG/FavoriteIcon/FavoriteIcon";
import { IPlanet } from "../../Planets/PlanetsContainer/PlanetsContainer";
import {
  FavoriteButton,
  PlanetBody,
  TableBodyCell,
} from "./PlanetBodyContainer.styles";
import { PlanetTableRow } from "../PlanetTable.styles";

type PlanetBodyContainerProps = {
  planets: IPlanet[];
  handleRoute: (routeId: number) => void;
  pair: { [key: string]: number };
  handleAddToFavorite: (
    e: MouseEvent<HTMLButtonElement>,
    planet: IPlanet
  ) => void;
  idFavoritePlanets: string[];
};

export const PlanetBodyContainer: FC<PlanetBodyContainerProps> = ({
  planets,
  handleRoute,
  pair,
  handleAddToFavorite,
  idFavoritePlanets,
}) => {
  return (
    <>
      {planets.map((planet) => (
        <PlanetBody key={planet.id}>
          <PlanetTableRow onClick={() => handleRoute(pair[planet.id])}>
            <TableBodyCell $isFirst={true}>{planet.name}</TableBodyCell>
            <TableBodyCell>{planet.climates[0]}</TableBodyCell>
            <TableBodyCell>{planet.diameter}</TableBodyCell>
            <TableBodyCell>{planet.population || "unknown"}</TableBodyCell>
            <TableBodyCell $isLast={true}>
              <FavoriteButton onClick={(e) => handleAddToFavorite(e, planet)}>
                <FavoriteIcon variant={idFavoritePlanets.includes(planet.id)} />
              </FavoriteButton>
            </TableBodyCell>
          </PlanetTableRow>
        </PlanetBody>
      ))}
    </>
  );
};
