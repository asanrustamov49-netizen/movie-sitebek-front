"use client"
import { useQuery } from "@tanstack/react-query";
import { Api } from "./api/Api";

interface IUser {
  id: number;
  email: string;
  name: string;
  avatar: string;
  registered_at: string;
}

interface IProfileResponse {
  message: string;
  data: IUser;
}

export const useProfile = () =>
  useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await Api.get<IProfileResponse>("/movies/profile");
      return res.data.data;
    },
  });
