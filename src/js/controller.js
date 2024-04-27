import icons from "../img/icons.svg";
import 'core-js/stable';
import 'regenerator-runtime/runtime'
import * as model from './models/models.js'
import recipeView from './view/recipeView.js'

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const key = '840f3e04-fb7e-4f8b-b6e4-b8da21f4f83a';
const uuid = '5ed6604591c37cdc054bcc40'

function renderSpinner(parentEl){
  const markut = `
  <div class="spinner">
    <svg>
      <use href="src/img/icons.svg#icon-loader"></use>
    </svg>
  </div>
  `
  parentEl.innerHTML = ''
  parentEl.insertAdjacentHTML('afterbegin', markut)
}

async function showRecipe(){
  try {
    const id = window.location.hash.slice(1)
    if (!id) return;
    renderSpinner(recipeContainer)
    await model.loadRecipe(id)
    recipeView.render(model.state.recipe)
  } catch (error) {
    console.log(error);
  }

}

// showRecipe()

['hashchange', 'load'].forEach(event => window.addEventListener(event, showRecipe) );