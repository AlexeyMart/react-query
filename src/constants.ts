export enum AppRoutes {
  Main = "/",
  SuperHeroes = "super-heroes",
  SuperHero = "super-heroes/:heroId",
  Parallel = "parallel",
  Dependent = "dependent",
}

export enum QueryRoutes {
  SuperHeroes = "http://localhost:4000/superheroes",
  Users = "http://localhost:4000/users",
  Channels = "http://localhost:4000/channels",
}

export enum QueryKeys {
  SuperHeroes = "super-heroes",
  SuperHero = "super-hero",
  Users = "users",
  Channels = "channels",
}
