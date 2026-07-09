import { useMutation } from "@tanstack/react-query";
import { Api } from "./api/Api";

export interface IBody {
  title: string;
  year: number;
  poster: string;
  description: string;
}

export const useCreate = () =>
  useMutation({
    mutationKey: ["create"],
    mutationFn: async (body: IBody) => {
      const response = await Api.post("/movies", body);
      return response.data;
    },
  });
