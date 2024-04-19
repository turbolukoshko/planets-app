export const SIDEBAR_ROUTES = [
  { path: "/planets", name: "Planets" },
  { path: "/favorites", name: "Favorites" },
];

export const ROUTES = {
  root: "/",
  planets: "/planets",
  planet: "/planets/:planetId",
  favorites: "/favorites",
  notFound: "*",
};
