import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { SIDEBAR_ROUTES } from "../../../constants/routes";

describe("Sidebar component", () => {
  test("Renders component", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
  });

  test("Renders correct number of sidebar links", () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const sidebarLinks = getAllByRole("link");
    expect(sidebarLinks.length).toBe(SIDEBAR_ROUTES.length);
  });

  test("Each sidebar link has correct path and name", () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const sidebarLinks = getAllByRole("link");
    sidebarLinks.forEach((link, index) => {
      expect(link).toHaveAttribute("href", SIDEBAR_ROUTES[index].path);
      expect(link.textContent).toBe(SIDEBAR_ROUTES[index].name);
    });
  });
});
