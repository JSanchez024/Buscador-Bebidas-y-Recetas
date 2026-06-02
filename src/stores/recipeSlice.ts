import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipieService"
import type { categories } from "../types"



export type RecipiesSliceType = {
    categories: categories
    fetchCategories: () => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipiesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    }
})