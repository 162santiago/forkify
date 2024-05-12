import { API_URL } from "../config.js";
import { getJson } from "../view/helper.js";
export const state = {
  recipe : {}
}

export async function  loadRecipe(id){
  try {
  const data = await getJson(`${API_URL}/${id}`  )
    console.log(`${API_URL}/${id}`);
  console.log(data);
    const {recipe}= data.data;


  state.recipe = {
    id : recipe.id,
    title : recipe.title,
    publisher : recipe.publisher,
    sourceUrl : recipe.source_url,
    image : recipe.image_url,
    servings : recipe.servings,
    cookingTime : recipe.cooking_time,
    ingredients : recipe.ingredients
  }
} catch (error) {
    console.log(error);
}

}