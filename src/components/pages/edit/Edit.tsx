"use client";
import { useForm } from "react-hook-form";
import scss from "./edit.module.scss";
import { useUpdate } from "@/hooks/useUpdate";
import { useParams } from "next/navigation";
import { useGetOne } from "@/hooks/useGetOne";
import { useEffect } from "react";

interface IForm {
  title: string;
  year: number;
  poster: string;
  description: string;
}

const Edit = () => {
  const { mutate: updateMovie } = useUpdate();
  const { id } = useParams();
  const { data: movie } = useGetOne(+id);
  const { handleSubmit, reset, register } = useForm<IForm>();
  useEffect(() => {
    if (movie) {
      reset({
        title: movie.title,
        year: movie.year,
        poster: movie.poster,
        description: movie.description,
      });
    }
  }, [movie, reset]);
  const handleData = (data: IForm) => {
    updateMovie({ id: id, body: data });
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
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
