import styled from "styled-components";

export const PlanetSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
