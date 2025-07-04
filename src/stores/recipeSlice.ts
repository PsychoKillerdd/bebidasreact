import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category = {}

export type RecipesSliceType = {
    categories:Category[],
    fetchCategories: () => Promise<void>
}
//fetch

export const createRecipesSlice:StateCreator<RecipesSliceType> = () => ({
    categories:[],
    fetchCategories: async () => {
        const categories = await getCategories();
        console.log(categories);
    }

})