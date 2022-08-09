import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import { Header } from "../header/Header";

export const Layout: FC = () => {
  return (
    <div className="layout">
      <Header />

      <Outlet />
    </div>
  );
};
