import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { QueryKeys, QueryRoutes, staleTime } from "../constants";
import { SuperHero } from "../types";

export const fetchSuperHero = async (heroId: string) => {
  try {
    const response: AxiosResponse<SuperHero> = await axios.get(
      `${QueryRoutes.SuperHeroes}/${heroId}`
    );

    return response.data;
  } catch (error) {
    // logging error

    throw error;
  }
};

export const useSuperHeroData = (heroId: string) => {
  const queryClient = useQueryClient();

  return useQuery([QueryKeys.SuperHero, heroId], () => fetchSuperHero(heroId), {
    //  example how to set initial data from another query data
    initialData: () => {
      const heroes = queryClient.getQueryData<SuperHero[]>([
        QueryKeys.SuperHeroes,
      ]);

      const hero = heroes?.find(({ id }) => id === heroId);

      return hero;
    },
    // example how to set initial data and refetch on mount
    // initialData: (): SuperHero => ({
    //   id: "some id",
    //   alterEgo: "some alterEgo",
    //   name: "some name",
    // }),
    // initialDataUpdatedAt: new Date().getTime() - staleTime,
  });
};
