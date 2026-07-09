import { useQuery } from "@tanstack/react-query";
import { Api } from "./api/Api";

interface IGetResponse {
  message: string;
  data: IData;
}

interface IData {
  id: number;
  password: string;
  name: string;
  email: string;
  avatar: string;
  registered_at: string;
}

export const useGetProfile = () =>
  useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await Api.get<IGetResponse>("/movies/profile");
      return response.data.data;
    },
  });
