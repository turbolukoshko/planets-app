import { gql } from "@apollo/client";

export const GET_PLANETS = gql`
  query GetPlanets($limit: Int!) {
    allPlanets(first: $limit) {
      planets {
        id
        name
        climates
        diameter
        population
        gravity
      }
    }
  }
`;
