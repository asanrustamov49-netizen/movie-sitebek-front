"use client";
import { IMovie } from "@/hooks/useGetMovies";
import scss from "./movieCards.module.scss";
import { useDeleteMovie } from "@/hooks/useDeleteMovie";
import { useRouter } from "next/navigation";
import { useWishList } from "@/hooks/wishlist/useWishList";

interface IMovieCards {
  movie: IMovie;
}

const MovieCards = ({ movie }: IMovieCards) => {
  const { mutate: deleteMovie } = useDeleteMovie();
  const { addToWishlist } = useWishList();
  const { push } = useRouter();
  return (
    <div className={scss.card}>
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <h4>{movie.year}</h4>
      <button onClick={() => addToWishlist(movie)}>Add to Wishlist</button>
      <button onClick={() => push(`/edit/${movie.id}`)}>Edit</button>
      <button onClick={() => deleteMovie(movie.id)}>Delete</button>
    </div>
  );
};

export default MovieCards;
