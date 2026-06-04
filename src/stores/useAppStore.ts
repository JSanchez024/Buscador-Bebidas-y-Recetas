import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type RecipiesSliceType } from "./recipeSlice";
import { type FavoritesSliceType, createFavoriteSlice } from "./favoritesSlice";
import { type NotifiactionSliceType, createNotificationSlice } from "./notificationSlice";

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType & NotifiactionSliceType>()(devtools((...a) => ({

    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),

}))) 