import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { QueryKeys, QueryRoutes } from "../constants";
import { SuperHero } from "../types";

const fetchSuperHeroes = async () => {
  try {
    const response: AxiosResponse<SuperHero[]> = await axios.get(
      QueryRoutes.SuperHeroes
    );

    return response.data;
  } catch (error) {
    // logging error

    throw error;
  }
};

interface Params {
  onSuccess?: (data: SuperHero[]) => void;
  onError?: (error: AxiosError) => void;
}

export const useSuperHeroesData = ({ onSuccess, onError }: Params) => {
  return useQuery([QueryKeys.SuperHeroes], fetchSuperHeroes, {
    // enabled: false,
    // select: (data: SuperHero[]) => data,
    onSuccess,
    onError,
  });
};
