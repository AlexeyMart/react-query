import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { QueryKeys } from "../../../constants";
import { fetchSuperHeroes } from "../../requests/fetchSuperHeroes";
import { SuperHero } from "../../../types";
import { Loader } from "../../loader/Loader";
import "./SuperHeroes.css";

export const SuperHeroes: FC = () => {
  const { isLoading, isFetching, isError, data, error } = useQuery(
    [QueryKeys.SuperHeroes],
    fetchSuperHeroes
  );

  const renderHero = ({ id, name, alterEgo }: SuperHero) => {
    return (
      <div key={id}>
        Name: {name}, AlterEgo: {alterEgo}
      </div>
    );
  };

  if (isError) {
    return <h3>Error: {(error as AxiosError).message}</h3>;
  }

  return (
    <div className="super-heroes">
      <h2 className="super-heroes_title">SuperHeroes Page</h2>

      {(isLoading || isFetching) && <Loader />}

      {data && <div className="super-heroes_list">{data.map(renderHero)}</div>}
    </div>
  );
};
