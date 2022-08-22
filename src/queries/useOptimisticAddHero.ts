import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { QueryKeys, QueryRoutes } from "../constants";
import { SuperHero } from "../types";
import { successNotification, errorNotification } from "../utils/notifications";

const addHero = async (hero: Omit<SuperHero, "id">) => {
  try {
    await axios.post(QueryRoutes.SuperHeroes, hero);
  } catch (error) {
    // logging error

    throw error;
  }
};

export const useOptimisticAddHero = () => {
  const queryClient = useQueryClient();

  return useMutation(addHero, {
    // получает же же аргументы, что и mutationFn
    onMutate: async (hero: Omit<SuperHero, "id">) => {
      // отменяем на всякий случай все возможные refetch-и чтобы не перезаписывать optimistic update
      await queryClient.cancelQueries([QueryKeys.SuperHeroes]);

      // сохраняем текущие данные на случай ошибки
      const previousHeroesData: SuperHero[] | undefined =
        queryClient.getQueryData([QueryKeys.SuperHeroes]);

      const updater = (oldQueryData: SuperHero[] | undefined) =>
        oldQueryData
          ? oldQueryData.concat({ ...hero, id: uuid() })
          : oldQueryData;

      queryClient.setQueryData([QueryKeys.SuperHeroes], updater);

      // возвращаем объект со старыми данными
      return {
        previousHeroesData,
      };
    },
    onError: (_error, _hero, context) => {
      errorNotification("Произошла ошибка");

      // достаем из context возвращаемую из onMutate previousHeroesData
      queryClient.setQueryData(
        [QueryKeys.SuperHeroes],
        context?.previousHeroesData
      );
    },
    // onSettled выполнится в любом случае (и в случае успеха и ошибки)
    onSettled: () => {
      // можно сделать refetch для точной синхронизации данных
      queryClient.invalidateQueries([QueryKeys.SuperHeroes]);
    },
    onSuccess: () => {
      successNotification("Успешно");
    },
  });
};
