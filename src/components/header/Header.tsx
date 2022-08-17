import { FC } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../constants";
import { ILink } from "../../types";

const links: ILink[] = [
  {
    path: AppRoutes.Main,
    label: "Home Page",
  },
  { path: AppRoutes.SuperHeroes, label: "SuperHeroes Page" },
  { path: AppRoutes.Parallel, label: "Parallel" },
  { path: AppRoutes.Dependent, label: "Dependent" },
  { path: AppRoutes.Paginated, label: "Paginated" },
  { path: AppRoutes.Infinite, label: "Infinite" },
];

export const Header: FC = () => {
  const renderLink = ({ label, path }: ILink) => (
    <NavLink key={label} className="header_link" to={path}>
      {label}
    </NavLink>
  );

  return <header className="header">{links.map(renderLink)}</header>;
};
