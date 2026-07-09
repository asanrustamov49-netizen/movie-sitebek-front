import { useQuery } from "@tanstack/react-query";
import { Api } from "./api/Api";

export interface IGetOneResponse {
  message: string;
  data: IMovie;
}

export interface IMovie {
  title: string;
  year: number;
  poster: string;
  description: string;
  id: number;
  created_at: string;
}

export const useGetOne = (id: number) =>
  useQuery({
    queryKey: ["get one"],
    queryFn: async () => {
      const response = await Api.get<IGetOneResponse>(`/movies/${id}`);
      return response.data.data;
    },
  });
