import { useMutation } from "@tanstack/react-query";
import { Api } from "./api/Api";

export const useDeleteMovie = () =>
  useMutation({
    mutationKey: ["delete"],
    mutationFn: async (id: number) => {
      const response = await Api.delete(`/movies/${id}`);
      return response.data;
    },
  });
