import {EventEmitter} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe('Kacchi Biryani', 'A delicious and aromatic biryani.', 'http://rupcare.com/wp-content/uploads/2016/09/rupcare_kacchi-biryani-recipe.jpg'),
    new Recipe('Beef Steak', 'Beefsteaks are usually grilled, pan-fried, or broiled.', 'https://www.wish-bone.com/wp-content/uploads/2013/11/CaribbeanJerkBeefSteak.jpg'),
    new Recipe('Pasta', 'Pasta is a staple food of traditional Italian cuisine.', 'http://i.ndtvimg.com/i/2016-04/pasta-625_625x350_51461826065.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
