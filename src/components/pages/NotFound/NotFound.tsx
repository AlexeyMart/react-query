import { FC } from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../constants";

export const NotFound: FC = () => {
  return (
    <div>
      <Typography.Title>Page not found...</Typography.Title>

      <Link to={AppRoutes.Main}>To main page</Link>
    </div>
  );
};
