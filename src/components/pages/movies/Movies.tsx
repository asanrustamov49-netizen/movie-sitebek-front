"use client";
import { useGetMovies } from "@/hooks/useGetMovies";
import scss from "./movies.module.scss";
import MovieCards from "@/components/ui/movieCards/MovieCards";
const Movies = () => {
  const { data: movies } = useGetMovies();
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.movies}>
          <h1>Movies</h1>
          <div className={scss.cards}>
            {movies?.map((item) => (
              <MovieCards key={item.id} movie={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
