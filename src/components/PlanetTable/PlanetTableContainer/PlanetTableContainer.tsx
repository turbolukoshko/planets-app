import { useNavigate } from "react-router-dom";
import { FC, MouseEvent, useEffect, useState } from "react";
import { IPlanet } from "../../Planets/PlanetsContainer/PlanetsContainer";

import { PlanetTableHead } from "../PlanetTableHead/PlanetTableHead";
import { PlanetBodyContainer } from "../PlanetBodyContainer/PlanetBodyContainer";
import { PlanetTable } from "./PlanetTableContainer.styles";
import { ROUTES } from "../../../../constants/routes";

type PlanetTableContainerProps = {
  planets: IPlanet[];
  setPlanets: (planet: IPlanet[]) => void;
  pair: { [key: string]: number };
};

export const PlanetTableContainer: FC<PlanetTableContainerProps> = ({
  planets,
  setPlanets,
  pair,
}) => {
  const navigate = useNavigate();
  const [sortByDiameterAsc, setSortByDiameterAsc] = useState(true);
  const [sortByPopulationAsc, setSortByPopulationAsc] = useState(true);
  const [idFavoritePlanets, setIdFavoritePlanets] = useState<string[]>([]);

  const handleSortByDiameter = () => {
    const sortedPlanets = [...planets].sort((a, b) => {
      if (sortByDiameterAsc) {
        return parseFloat(a.diameter) - parseFloat(b.diameter);
      } else {
        return parseFloat(b.diameter) - parseFloat(a.diameter);
      }
    });
    setPlanets(sortedPlanets);
    setSortByDiameterAsc((prev) => !prev);
  };

  useEffect(() => {
    const storedFavoritePlanets = localStorage.getItem("favoritePlanets");
    if (storedFavoritePlanets) {
      const parsedPlanets = JSON.parse(storedFavoritePlanets);
      const ids = parsedPlanets.map((planet: IPlanet) => planet.id);
      setIdFavoritePlanets(ids);
    }
  }, []);

  const handleSortByPopulation = () => {
    const sortedPlanets = [...planets].sort((a, b) => {
      if (sortByPopulationAsc) {
        return parseInt(a.population || "0") - parseInt(b.population || "0");
      } else {
        return parseInt(b.population || "0") - parseInt(a.population || "0");
      }
    });
    setPlanets(sortedPlanets);
    setSortByPopulationAsc((prev) => !prev);
  };

  const handleAddToFavorite = (
    e: MouseEvent<HTMLButtonElement>,
    planet: IPlanet
  ) => {
    e.stopPropagation();

    const favoritePlanets = JSON.parse(
      localStorage.getItem("favoritePlanets") || "[]"
    ) as IPlanet[];

    const isAlreadyFavorite = favoritePlanets.some(
      (favPlanet) => favPlanet.id === planet.id
    );

    if (!isAlreadyFavorite) {
      const newFavoritePlanets = [...favoritePlanets, planet];
      localStorage.setItem(
        "favoritePlanets",
        JSON.stringify(newFavoritePlanets)
      );
      const ids = [...idFavoritePlanets, planet.id];
      setIdFavoritePlanets(ids);
    } else {
      const newFavoriteList = favoritePlanets.filter((p) => p.id !== planet.id);
      localStorage.setItem("favoritePlanets", JSON.stringify(newFavoriteList));
      const ids = idFavoritePlanets.filter((id) => id !== planet.id);
      setIdFavoritePlanets(ids);
    }
  };

  const handleRoute = (routeId: number) => {
    navigate(`${ROUTES.planets}/${routeId}`);
  };

  return (
    <PlanetTable>
      <PlanetTableHead
        handleSortByDiameter={handleSortByDiameter}
        sortByDiameterAsc={sortByDiameterAsc}
        handleSortByPopulation={handleSortByPopulation}
        sortByPopulationAsc={sortByPopulationAsc}
      />
      <PlanetBodyContainer
        planets={planets}
        handleRoute={handleRoute}
        pair={pair}
        handleAddToFavorite={handleAddToFavorite}
        idFavoritePlanets={idFavoritePlanets}
      />
    </PlanetTable>
  );
};
