import { FC } from "react";
import { AxiosError } from "axios";
import { SuperHero } from "../../../types";
import { Loader } from "../../loader/Loader";
import { Card, Button } from "antd";
import { useSuperHeroesData } from "../../../queries/useSuperHeroesData";
import "./SuperHeroes.css";
import {
  errorNotification,
  successNotification,
} from "../../../utils/notifications";

export const SuperHeroes: FC = () => {
  const onSuccess = (data: SuperHero[]) => {
    console.log("data :>> ", data);

    successNotification("Данные получены");
  };

  const onError = (error: AxiosError) => {
    console.log("error :>> ", error);

    errorNotification("Произошла ошибка");
  };

  const { isLoading, isFetching, isError, data, error, refetch } =
    useSuperHeroesData({ onSuccess, onError });

  const handleRefetch = () => {
    refetch();
  };

  const renderHero = ({ id, name, alterEgo }: SuperHero) => {
    return (
      <Card key={id} title={name}>
        <p>{alterEgo}</p>
      </Card>
    );
  };

  if (isError) {
    return <h3>Error: {(error as AxiosError).message}</h3>;
  }

  return (
    <div className="super-heroes">
      <h2 className="super-heroes_title">SuperHeroes Page</h2>

      <Button onClick={handleRefetch} style={{ marginBottom: "10px" }}>
        Fetch / Refetch
      </Button>

      {(isLoading || isFetching) && <Loader />}

      {data && <div className="super-heroes_list">{data.map(renderHero)}</div>}
    </div>
  );
};
