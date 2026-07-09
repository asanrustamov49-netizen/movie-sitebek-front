import { useMutation } from "@tanstack/react-query";
import { Api } from "./api/Api";

export const useRegister = () =>
  useMutation({
    mutationKey: ["register account"],
    mutationFn: async (data: {
      email: string;
      password: string;
      name: string;
      avatar: string;
    }) => {
      const response = await Api.post("/movies/register", data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);

      //   window.location.href = "/login";
    },
  });
