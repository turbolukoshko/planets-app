import styled from "styled-components";

export const FavoriteButton = styled.button`
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const PlanetBody = styled.tbody`
  cursor: pointer;
`;

interface TableBodyCellProps {
  $isFirst?: boolean;
  $isLast?: boolean;
}

export const TableBodyCell = styled.th<TableBodyCellProps>`
  font-weight: ${(props) => (props.$isFirst ? 700 : 400)};
  font-size: ${(props) => (props.$isFirst ? "16px" : "14px")};
  line-height: 16px;
  padding: 19px 24px;
  text-align: justify;
  padding-left: ${(props) => (props.$isLast ? "40px" : "24px")};
`;
