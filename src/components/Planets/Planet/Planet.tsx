import { FC } from "react";
import { IPlanet } from "../PlanetsContainer/PlanetsContainer";
import {
  PlanetClimat,
  PlanetContainer,
  PlanetGravity,
  PlanetHeader,
  PlanetInfo,
} from "./Planet.styles";

export const Planet: FC<{ planet: IPlanet }> = ({ planet }) => {
  return (
    <PlanetContainer>
      <PlanetHeader>{planet.name}</PlanetHeader>
      <PlanetInfo>
        <PlanetClimat>Climate: {planet.climates}</PlanetClimat>
        <PlanetGravity>Gravity: {planet.gravity}</PlanetGravity>
      </PlanetInfo>
    </PlanetContainer>
  );
};
