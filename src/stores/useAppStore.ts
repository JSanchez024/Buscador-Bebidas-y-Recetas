import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type RecipiesSliceType } from "./recipeSlice";
import { type FavoritesSliceType, createFavoriteSlice } from "./favoritesSlice";

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType>()(devtools((...a) => ({

    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),

}))) 