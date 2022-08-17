export enum AppRoutes {
  Main = "/",
  SuperHeroes = "super-heroes",
  SuperHero = "super-heroes/:heroId",
  Parallel = "parallel",
  Dependent = "dependent",
  Paginated = "paginated",
  Infinite = "infinite",
}

export enum QueryRoutes {
  SuperHeroes = "http://localhost:4000/superheroes",
  Users = "http://localhost:4000/users",
  Channels = "http://localhost:4000/channels",
  Colors = "http://localhost:4000/colors",
}

export enum QueryKeys {
  SuperHeroes = "super-heroes",
  SuperHero = "super-hero",
  Users = "users",
  Channels = "channels",
  Colors = "colors",
}

// 5 minutes
export const staleTime = 5 * 60 * 1000;
