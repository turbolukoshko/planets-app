import { useEffect, useState } from "react";

import { IPlanet } from "../Planets/PlanetsContainer/PlanetsContainer";
import { CloseIcon } from "../shared/SVG/CloseIcon/CloseIcon";
import { Modal } from "../shared/Modal/Modal";
import {
  FavoriteHeaderContainer,
  FavoriteSection,
  FavoriteSubtitle,
  FavoritesFooter,
  FavoritesHeader,
  FavoritesImgContainer,
  FavoritesItem,
  FavoritesList,
  FavoritesNotification,
  FavoritesParagraph,
  FavoritesTitle,
  Image,
  RemoveButton,
} from "./Favorites.styles";
import planetImage from "../../assets/planet.jpeg";
import { Header } from "../General.styles";
import { parseFavoritePlanets } from "../../../utils/parseFavoritePlanets";

export const Favorites = () => {
  const [favoriteList, setFavoriteList] = useState<IPlanet[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [planetId, setPlanetId] = useState<string>("");

  useEffect(() => {
    const favoritePlanets = parseFavoritePlanets() as IPlanet[];

    setFavoriteList(favoritePlanets);
  }, []);

  const removeFavorite = (planetId: string) => {
    setModalOpen(true);
    setPlanetId(planetId);
  };

  const updateLocalStorage = (planetId: string) => {
    const newFavoriteList = [...favoriteList].filter(
      (planet) => planet.id !== planetId
    );

    localStorage.setItem("favoritePlanets", JSON.stringify(newFavoriteList));
    setFavoriteList(newFavoriteList);
    setModalOpen(false);
  };

  return (
    <>
      <FavoriteSection>
        <Header>Favorites</Header>
        {favoriteList.length ? (
          <FavoritesList>
            {favoriteList.map((planet) => (
              <FavoritesItem key={planet.id}>
                <FavoriteHeaderContainer>
                  <FavoritesHeader>
                    <FavoritesTitle>{planet.name}</FavoritesTitle>
                    <FavoriteSubtitle>{planet.climates[0]}</FavoriteSubtitle>
                  </FavoritesHeader>
                  <RemoveButton
                    onClick={() => removeFavorite(planet.id)}
                    data-testid="remove-button"
                  >
                    <CloseIcon variant="small" />
                  </RemoveButton>
                </FavoriteHeaderContainer>
                <FavoritesImgContainer>
                  <Image src={planetImage} alt="Planet" />
                </FavoritesImgContainer>
                <FavoritesFooter>
                  <FavoritesParagraph>
                    Climate: {planet.climates[1] || planet.climates[0]}
                  </FavoritesParagraph>
                  <FavoritesParagraph>
                    Gravity: {planet.gravity}
                  </FavoritesParagraph>
                </FavoritesFooter>
              </FavoritesItem>
            ))}
          </FavoritesList>
        ) : (
          <FavoritesNotification>No favorites</FavoritesNotification>
        )}
      </FavoriteSection>
      {modalOpen && (
        <Modal
          onClick={() => updateLocalStorage(planetId)}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};
