import axios, { AxiosResponse } from "axios";
import { QueryRoutes } from "../../constants";
import { SuperHero } from "../../types";

export const fetchSuperHeroes = async () => {
  try {
    const response: AxiosResponse<SuperHero[]> = await axios.get(
      QueryRoutes.SuperHeroes
    );

    return response.data;
  } catch (error) {
    // logging error

    throw error;
  }
};
