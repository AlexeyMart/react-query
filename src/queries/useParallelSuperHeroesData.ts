import { useQueries } from "@tanstack/react-query";
import { fetchSuperHero } from "./useSuperHeroData";
import { QueryKeys } from "../constants";

export const useParallelSuperHeroesData = (heroIds: string[]) => {
  const queries = heroIds.map((heroId) => ({
    queryKey: [QueryKeys.SuperHero, heroId],
    queryFn: () => fetchSuperHero(heroId),
  }));

  return useQueries({ queries });
};
