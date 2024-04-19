import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
  background: #154064;
  color: #e0e0e0;
  min-width: 266px;
`;

export const SidebarLink = styled(NavLink)`
  color: #e0e0e0;
  text-decoration: none;
  transition: background-color 0.3s;
  font-size: 14px;
  line-height: 17px;
  padding: 12px 0 12px 24px;
  display: block;

  &:hover {
    background: #1c5686;
  }

  &.active {
    background: #1c5686;
  }
`;

export const SidebarHeader = styled.h3`
  margin: 0;
  padding: 17px 24px 16px;
  font-weight: 700;
  font-size: 22px;
  line-height: 31px;
`;

export const SidebarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
