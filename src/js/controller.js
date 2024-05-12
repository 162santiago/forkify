import icons from "../img/icons.svg";
import 'core-js/stable';
import 'regenerator-runtime/runtime'
import * as model from './models/models.js'
import recipeView from './view/recipeView.js'

const recipeContainer = document.querySelector('.recipe')

async function controlRecipe(){
  try {
    const id = window.location.hash.slice(1)
    if (!id) return;
    recipeView.renderSpinner()
    await model.loadRecipe(id)
    recipeView.render(model.state.recipe)
  } catch (error) {
    console.log(error);
  }

}

// showRecipe()

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe) );