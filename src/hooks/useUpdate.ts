import { useMutation } from "@tanstack/react-query";
import { Api } from "./api/Api";
import { IBody } from "./useCreate";
import { IMovie } from "./useGetMovies";

export interface INewBody {
  body: IBody;
  id: number;
}

export const useUpdate = () =>
  useMutation({
    mutationKey: ["update"],
    mutationFn: async ({ id, body }: INewBody) => {
      const response = await Api.patch(`/movies/${id}`, body);
      return response.data
    },
  });
