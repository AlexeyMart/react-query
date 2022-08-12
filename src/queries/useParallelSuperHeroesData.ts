import { QueryOptions, useQueries } from "@tanstack/react-query";
import { fetchSuperHero } from "./useSuperHeroData";
import { QueryKeys } from "../constants";
import { SuperHero } from "../types";

export const useParallelSuperHeroesData = (heroIds: string[]) => {
  const queries: QueryOptions<SuperHero>[] = heroIds.map((heroId) => ({
    queryKey: [QueryKeys.SuperHero, heroId],
    queryFn: () => fetchSuperHero(heroId),
  }));

  return useQueries({ queries });
};
