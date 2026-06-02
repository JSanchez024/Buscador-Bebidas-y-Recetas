import { z } from "zod";
import { CategoriesAPIResponseSchema } from "../utils/recipes-schema";

export type categories = z.infer<typeof CategoriesAPIResponseSchema>