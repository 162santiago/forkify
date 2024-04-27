export const state = {
  recipe : {}
}

export async function  loadRecipe(id){
  try {
    
  const request = await fetch(
    // `https://forkify-api.herokuapp.com/api/v2/recipes/${key}`
  `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  )
  const data = await request.json();
  if (!request.ok) throw new Error(`${data.message} ${request.status}`)

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