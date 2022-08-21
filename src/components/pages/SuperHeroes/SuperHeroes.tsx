import { FC } from "react";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import { SuperHero } from "../../../types";
import { Loader } from "../../loader/Loader";
import { Button, Typography, Input } from "antd";
import { useSuperHeroesData } from "../../../queries/useSuperHeroesData";
import { useAddHero } from "../../../queries/useAddHero";
import "./SuperHeroes.css";
import {
  errorNotification,
  successNotification,
} from "../../../utils/notifications";
import { ErrorComponent } from "../../error/ErrorComponent";
import { useInputValue } from "../../../hooks/useInputValue";

export const SuperHeroes: FC = () => {
  const { isLoading, isFetching, isError, data, error, refetch } =
    useSuperHeroesData({ onSuccess, onError });

  const {
    mutate: addHero,
    isLoading: isAdding,
    isError: isAddingError,
    error: addingError,
  } = useAddHero();

  const [name, setName] = useInputValue();

  const [alterEgo, setAlterEgo] = useInputValue();

  const handleAddHero = () => {
    addHero({ name, alterEgo });
  };

  const handleRefetch = () => {
    refetch();
  };

  const renderHero = ({ id, name }: SuperHero) => {
    return (
      <Link to={`${id}`} key={id} className="super-heroes_hero-link">
        <Typography.Title level={4}>{name}</Typography.Title>
      </Link>
    );
  };

  if (isError || isAddingError) {
    return <ErrorComponent error={error || addingError} />;
  }

  return (
    <div className="super-heroes">
      <Typography.Title>SuperHeroes Page</Typography.Title>

      <div className="super-heroes_add">
        <Input placeholder="name" value={name} onChange={setName} />

        <Input placeholder="alterEgo" value={alterEgo} onChange={setAlterEgo} />

        <Button
          onClick={handleAddHero}
          disabled={!name || !alterEgo || isAdding}
        >
          Add hero
        </Button>
      </div>

      <Button onClick={handleRefetch} style={{ marginBottom: "30px" }}>
        Fetch / Refetch
      </Button>

      {(isLoading || isFetching || isAdding) && <Loader />}

      {data && <div className="super-heroes_list">{data.map(renderHero)}</div>}
    </div>
  );
};

function onSuccess(data: SuperHero[]) {
  console.log("heroes :>> ", data);

  successNotification("Данные получены");
}

function onError(error: AxiosError) {
  console.log("error :>> ", error);

  errorNotification("Произошла ошибка");
}
