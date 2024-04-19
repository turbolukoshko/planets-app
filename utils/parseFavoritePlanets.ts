export const parseFavoritePlanets = () =>
    JSON.parse(localStorage.getItem("favoritePlanets") || "[]");
  