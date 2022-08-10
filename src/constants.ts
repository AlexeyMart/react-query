export enum AppRoutes {
  Main = "/",
  SuperHeroes = "/super-heroes",
}

export enum QueryRoutes {
  SuperHeroes = "http://localhost:4000/superheroes",
}

export enum QueryKeys {
  SuperHeroes = "super-heroes",
}

// 5 minutes in ms
export const staleTime = 5 * 60 * 1000;
