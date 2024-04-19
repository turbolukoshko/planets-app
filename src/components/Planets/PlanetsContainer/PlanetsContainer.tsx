import { FC, ReactNode, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

import { GET_PLANETS } from "../../../../graphql/queries";
import { Planet } from "../Planet/Planet";
import { Loader } from "../../shared/SVG/Loader/Loader";
import {
  Container,
  LoaderContainer,
  PlanetSection,
} from "./PlanetsContainer.styles";
import { PlanetTableContainer } from "../../PlanetTable/PlanetTableContainer/PlanetTableContainer";
import { Header } from "../../General.styles";
import { ROUTES } from "../../../../constants/routes";

export interface IPlanet {
  id: string;
  name: string;
  climates: string[];
  diameter: string;
  population: string;
  gravity: string;
}

interface PlanetsData {
  allPlanets: {
    planets: IPlanet[];
  };
}

type PlanetsContainerType = {
  children?: ReactNode;
};

export const PlanetsContainer: FC<PlanetsContainerType> = () => {
  const { loading, error, data } = useQuery<PlanetsData>(GET_PLANETS, {
    variables: { limit: 6 },
  });
  const navigate = useNavigate();

  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [pair, setPair] = useState<{ [key: string]: number }>({});

  const planetId = useParams();
  const isPlanetPage = Object.keys(planetId).length;

  useEffect(() => {
    if (!loading && data) {
      if (data.allPlanets.planets.length < Number(planetId.planetId)) {
        navigate(ROUTES.planets);
      }
    }
  }, [loading, data, navigate, planetId, isPlanetPage]);

  useEffect(() => {
    if (!loading && data) {
      setPlanets(data.allPlanets.planets);

      const pair: { [key: string]: number } = {};
      data.allPlanets.planets.forEach((planet, index) => {
        pair[planet.id] = index + 1;
      });
      setPair(pair);
    }
  }, [loading, data, navigate, planetId, isPlanetPage]);

  if (loading)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );

  if (error) return <h1>Error: {error.message} ...</h1>;

  return (
    <Container>
      <PlanetSection>
        <Header>Planets</Header>
        <PlanetTableContainer
          planets={planets}
          setPlanets={setPlanets}
          pair={pair}
        />
      </PlanetSection>
      {isPlanetPage &&
      data &&
      data.allPlanets.planets &&
      data.allPlanets.planets.length >= Number(planetId.planetId) ? (
        <Planet
          planet={data.allPlanets.planets[Number(planetId.planetId) - 1]}
        />
      ) : null}
    </Container>
  );
};
