import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PLANET_API } from "./config";

export const client = new ApolloClient({
  uri: PLANET_API,
  cache: new InMemoryCache(),
});
