import { useMutation } from "@tanstack/react-query";
import { Api } from "./api/Api";

interface IPostLogin {
  message: string;
  user: {
    email: string;
    id: number;
  };
  token: string;
}

export const useLogin = () =>
  useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await Api.post<IPostLogin>("/movies/login", data);
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);

      localStorage.setItem("token", res.token);
      //   window.location.href = "/";
    },
  });
