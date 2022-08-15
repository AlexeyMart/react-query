import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { QueryKeys, QueryRoutes } from "../constants";
import { User, Channel } from "../types";

const fetchUserById = async (userId: string) => {
  try {
    const response: AxiosResponse<User> = await axios.get(
      `${QueryRoutes.Users}/${userId}`
    );

    return response.data;
  } catch (error) {
    // logging error

    throw error;
  }
};

const fetchChannelById = async (channelId?: string) => {
  try {
    const response: AxiosResponse<Channel> = await axios.get(
      `${QueryRoutes.Channels}/${channelId}`
    );

    return response.data;
  } catch (error) {
    // logging error

    throw error;
  }
};

export const useUserData = (userId: string) => {
  return useQuery([QueryKeys.Users, userId], () => fetchUserById(userId));
};

export const useChannelData = (channelId?: string) => {
  return useQuery(
    [QueryKeys.Channels, channelId],
    () => fetchChannelById(channelId),
    { enabled: !!channelId }
  );
};
