import { FC } from "react";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import { SuperHero } from "../../../types";
import { Loader } from "../../loader/Loader";
import { Button, Typography } from "antd";
import { useSuperHeroesData } from "../../../queries/useSuperHeroesData";
import "./SuperHeroes.css";
import {
  errorNotification,
  successNotification,
} from "../../../utils/notifications";

export const SuperHeroes: FC = () => {
  const { isLoading, isFetching, isError, data, error, refetch } =
    useSuperHeroesData({ onSuccess, onError });

  const handleRefetch = () => {
    refetch();
  };

  const renderHero = ({ id, name }: SuperHero) => {
    return (
      <Link to={`${id}`} key={id}>
        <Typography.Title level={4}>{name}</Typography.Title>
      </Link>
    );
  };

  if (isError) {
    return (
      <Typography.Title level={2}>
        Error: {(error as AxiosError).message}
      </Typography.Title>
    );
  }

  return (
    <div className="super-heroes">
      <Typography.Title>SuperHeroes Page</Typography.Title>

      <Button onClick={handleRefetch} style={{ marginBottom: "30px" }}>
        Fetch / Refetch
      </Button>

      {(isLoading || isFetching) && <Loader />}

      {data && <div className="super-heroes_list">{data.map(renderHero)}</div>}
    </div>
  );
};

function onSuccess(data: SuperHero[]) {
  console.log("data :>> ", data);

  successNotification("Данные получены");
}

function onError(error: AxiosError) {
  console.log("error :>> ", error);

  errorNotification("Произошла ошибка");
}
