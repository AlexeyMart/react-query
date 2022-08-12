import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { QueryKeys, QueryRoutes } from "../constants";
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
  return useQuery([QueryKeys.SuperHero, heroId], () => fetchSuperHero(heroId));
};
