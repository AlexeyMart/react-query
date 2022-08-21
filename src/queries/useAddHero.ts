import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { QueryRoutes, QueryKeys } from "../constants";
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
  const queryClient = useQueryClient();

  return useMutation(addHero, {
    onError: () => {
      errorNotification("Произошла ошибка");
    },
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.SuperHeroes]);

      successNotification("Успешно");
    },
  });
};
