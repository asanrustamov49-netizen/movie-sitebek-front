"use client";
import { useWishList } from "@/hooks/wishlist/useWishList";
import scss from "./wishlist.module.scss";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishList();
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.wishlist}>
          <h1>My Wishlist</h1>
          <div className={scss.movies}>
            {wishlist?.map((movie) => (
              <div key={movie.id} className={scss.movie}>
                <img src={movie.poster} alt={movie.title} />
                <h2>{movie.title}</h2>
                <h4>{movie.year}</h4>
                <button onClick={() => removeFromWishlist(movie.id)}>
                  Remove from Wishlist
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
