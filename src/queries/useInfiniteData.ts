import { useInfiniteQuery, QueryFunctionContext } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { QueryKeys, QueryRoutes } from "../constants";
import { Color } from "../types";

const fetchColors = async ({ pageParam = 1 }: QueryFunctionContext) => {
  try {
    const response: AxiosResponse<Color[]> = await axios.get(
      `${QueryRoutes.Colors}?_limit=2&_page=${pageParam}`
    );

    return { colors: response.data, hasMore: "api response has more pages" };
  } catch (error) {
    // logging error

    throw error;
  }
};

export const useInfiniteData = () => {
  return useInfiniteQuery([QueryKeys.Colors], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      // _lastPage - то, что вернула fetcherFn в последний раз
      // pages - массив, куда складываются возвращаемые значения fetcherFn,
      // то же самое, что data.pages в компоненте

      // hard code, смотреть на api response выше
      if (pages.length < 4) {
        return pages.length + 1;
      }

      return undefined;
    },
  });
};
