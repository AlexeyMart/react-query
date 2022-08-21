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
    // в onSuccess автоматически попадают данные, типизация зависит от типизации fetcherFn
    onSuccess: (hero) => {
      // можно вызвать invalidateQueries (refetch query по указанному ключу), но это additional network request
      // queryClient.invalidateQueries([QueryKeys.SuperHeroes]);

      const updater = (oldQueryData: SuperHero[] | undefined) => {
        if (!oldQueryData) {
          return undefined;
        }

        return [...oldQueryData, hero];
      };

      queryClient.setQueryData([QueryKeys.SuperHeroes], updater);

      successNotification("Успешно");
    },
  });
};
