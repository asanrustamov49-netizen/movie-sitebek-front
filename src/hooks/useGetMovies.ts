"use client";
import { useQuery } from "@tanstack/react-query";
import { Api } from "./api/Api";

export interface IGetResponse {
  message: string;
  data: IMovie[];
}

export interface IMovie {
  title: string;
  year: number;
  poster: string;
  description: string;
  id: number;
  created_at: string;
}

export const useGetMovies = () =>
  useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await Api.get<IGetResponse>("/movies");
      return response.data.data;
    },
  });
