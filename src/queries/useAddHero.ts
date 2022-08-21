import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { QueryRoutes } from "../constants";
import { SuperHero } from "../types";
import { successNotification, errorNotification } from "../utils/notifications";

const addHero = async (hero: Omit<SuperHero, "id">) => {
  try {
    const response: AxiosResponse<SuperHero> = await axios.post(
      QueryRoutes.SuperHeroes,
      hero
    );

    return response.data;
  } catch (error) {
    // logging error

    throw error;
  }
};

export const useAddHero = () => {
  return useMutation(addHero, {
    onSuccess,
    onError,
  });
};

function onSuccess(data: SuperHero) {
  console.log("add hero :>> ", data);

  successNotification("Успешно");
}

function onError(error: AxiosError) {
  console.log("error :>> ", error);

  errorNotification("Произошла ошибка");
}
