import { UseQueryResult } from "@tanstack/react-query";
import { Typography } from "antd";
import { AxiosError } from "axios";
import { FC } from "react";
import { useParallelSuperHeroesData } from "../../../queries/useParallelSuperHeroesData";
import { SuperHero } from "../../../types";

interface Props {
  heroIds: string[];
}

export const ParallelQueries: FC<Props> = ({ heroIds }) => {
  // массив, каждый элемент которого - результат работы "отдельного" useQuery
  const results = useParallelSuperHeroesData(heroIds);

  const renderHero = (hero: UseQueryResult<SuperHero>, index: number) => {
    const { isLoading, isFetching, isError, error, data } = hero;

    if (isLoading || isFetching) {
      return (
        <Typography.Title level={3} key={index}>
          Loading...
        </Typography.Title>
      );
    }

    if (isError) {
      return (
        <Typography.Title level={3} key={index}>
          {(error as AxiosError).message}
        </Typography.Title>
      );
    }

    return <Typography.Title level={3}>{data.name}</Typography.Title>;
  };

  return (
    <div>
      <Typography.Title>SuperHero Page</Typography.Title>

      <div>{results.map(renderHero)}</div>
    </div>
  );
};
