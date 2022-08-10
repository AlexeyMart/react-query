import { FC } from "react";
import "./Loader.css";

export const Loader: FC = () => {
  return (
    <svg version="1.1" x="0" y="0" className="loader" viewBox="0 0 100 100">
      <circle className="loader_circle" cx="50" cy="50" r="44" />
    </svg>
  );
};
