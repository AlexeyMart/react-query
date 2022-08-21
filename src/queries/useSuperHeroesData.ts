import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { QueryKeys, QueryRoutes } from "../constants";
import { SuperHero } from "../types";
import { errorNotification, successNotification } from "../utils/notifications";

const fetchSuperHeroes = async ({ signal }: { signal?: AbortSignal }) => {
  try {
    const response: AxiosResponse<SuperHero[]> = await axios.get(
      QueryRoutes.SuperHeroes,
      { signal }
    );

    return response.data;
  } catch (error) {
    // logging error

    throw error;
  }
};

export const useSuperHeroesData = () => {
  return useQuery([QueryKeys.SuperHeroes], fetchSuperHeroes, {
    // enabled: false,
    // select: (data: SuperHero[]) => data,
    onSuccess,
    onError,
  });
};

function onSuccess(data: SuperHero[]) {
  console.log("fetched heroes :>> ", data);

  successNotification("Данные получены");
}

function onError(error: AxiosError) {
  console.log("error :>> ", error);

  errorNotification("Произошла ошибка");
}
