import { type StateCreator } from "zustand";
import type { Recipe } from "../types";

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
}

export const createFavoriteSlice : StateCreator<FavoritesSliceType> = () => ({
    favorites: [],
    handleClickFavorite: (Recipe) => {
        console.log(Recipe)

    }
})