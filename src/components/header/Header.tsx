import React, { FC } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../constants";

export const Header: FC = () => {
  return (
    <header className="header">
      <NavLink className="header_link" to={AppRoutes.Main}>
        Home Page
      </NavLink>

      <NavLink className="header_link" to={AppRoutes.SuperHeroes}>
        SuperHeroes Page
      </NavLink>
    </header>
  );
};
