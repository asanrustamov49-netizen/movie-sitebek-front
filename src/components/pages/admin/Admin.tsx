"use client";
import { useForm } from "react-hook-form";
import scss from "./admin.module.scss";
import { useCreate } from "@/hooks/useCreate";

interface IForm {
  title: string;
  year: number;
  poster: string;
  description: string;
}

const Admin = () => {
  const { mutate: createMovie } = useCreate();
  const { handleSubmit, reset, register } = useForm<IForm>();
  const handleData = (data: IForm) => {
    createMovie(data);
    reset();
  };
  return (
    <div className={scss.container}>
      <div className="container">
        <form
          onSubmit={handleSubmit(handleData)}
          className={scss.mainContainer}
        >
          <input {...register("title")} type="text" placeholder="Title" />
          <input {...register("poster")} type="text" placeholder="Image" />
          <input {...register("year")} type="text" placeholder="Year" />
          <input
            {...register("description")}
            type="text"
            placeholder="Description"
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
