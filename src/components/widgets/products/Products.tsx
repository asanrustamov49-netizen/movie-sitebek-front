"use client";
import MovieCards from "@/components/ui/movieCards/MovieCards";
import scss from "./products.module.scss";
import { useGetMovies } from "@/hooks/useGetMovies";

const Products = () => {
  const { data: movies } = useGetMovies();
  return (
    <div className={scss.products}>
      <h1>Products</h1>
      <div className={scss.cards}>
        {movies?.map((movie) => (
          <MovieCards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Products;
