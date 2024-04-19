import { FC } from "react";

import { SIDEBAR_ROUTES } from "../../../constants/routes";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarLink,
  SidebarList,
} from "./Sidebar.styles";

export const Sidebar: FC = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>PlanetsApp</SidebarHeader>
      <SidebarList>
        {SIDEBAR_ROUTES.map((route) => (
          <li key={route.path}>
            <SidebarLink to={route.path}>{route.name}</SidebarLink>
          </li>
        ))}
      </SidebarList>
    </SidebarContainer>
  );
};
