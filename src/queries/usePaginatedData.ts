import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { QueryKeys, QueryRoutes } from "../constants";
import { Color } from "../types";

const fetchColors = async (pageNumber: number) => {
  try {
    const response: AxiosResponse<Color[]> = await axios.get(
      `${QueryRoutes.Colors}?_limit=2&_page=${pageNumber}`
    );

    return response.data;
  } catch (error) {
    // logging error

    throw error;
  }
};

export const usePaginatedData = (pageNumber: number) => {
  return useQuery(
    [QueryKeys.Colors, pageNumber],
    () => fetchColors(pageNumber),
    { keepPreviousData: true }
  );
};
