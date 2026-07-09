import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IMovie } from "../useGetMovies";
import { IBody } from "../useCreate";

export interface IWishlistStore {
  wishlist: IMovie[];
  addToWishlist: (body: IMovie) => void;
  removeFromWishlist: (id: number) => void;
}

export const useWishList = create<IWishlistStore>()(
  persist<IWishlistStore>(
    (set) => ({
      wishlist: [],
      addToWishlist: (body) => {
        set((state) => ({
          wishlist: [...state.wishlist, body],
        }));
      },
      removeFromWishlist: (id) => {
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== id),
        }));
      },
    }),
    { name: "wishlist" },
  ),
);
